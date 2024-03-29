import { Request, Response } from 'express';
import rideModel from '../db/model/RideModel';
import userModel from '../db/model/UserModel';
import { bidOnRideSchema, createRideSchema, requestRideSchema } from './validation/Schemas';
import { JoiValidation } from './validation/Validation';
import { reach } from './Reach';
import { RideStatus } from '../enums/RideStatus';
import Config from '../config/Config';
import { User } from '../entities/User';
import { IRideDb } from '../db/interface/IRideDb';
import { DriverBidStatus } from '../enums/DriverBidStatus';
import { socketConnectionManager } from './web-sockets/SocketConnectionManager';
import { MessageType } from './web-sockets/socket-messages/MessageType';

export async function acceptRide(req: Request, res: Response): Promise<any> {
  const body = req.body;
  const rideId = req.params.id;

  try {
    JoiValidation.validate(createRideSchema, body);
  } catch (error) {
    return res.status(400).json({ error });
  }

  if (!rideId) {
    return res.status(400).json({ message: 'ride id is required' });
  }

  const driverDb = await userModel.findByUsername(body.driver_username);

  if (!driverDb) {
    return res.status(400).json({ message: 'driver not found' });
  }

  const ride = await rideModel.findById(rideId);
  if (!ride) {
    return res.status(400).json({ message: 'ride not found' });
  }

  const passengerDb = ride.passenger;

  await rideModel.updateAcceptRide(rideId, driverDb, body.price);

  console.log(
    `Ride inserted in db, waiting for it's contract to be deployed | Passenger: ${passengerDb.username} | Driver: ${driverDb.username} | RideId: ${ride._id}`
  );

  const passenger = new User(passengerDb);
  const driver = new User(driverDb);
  await Promise.all([passenger.setWallet(), driver.setWallet()]);

  res.status(200).json({ message: 'ride started', ride_id: ride._id });
  socketConnectionManager.connections.get(driver.username)?.sendObject(MessageType.RideArranged, { ride });
  socketConnectionManager.broadcastMessage([passenger.username, driver.username], MessageType.RideCanceled, {
    _id: ride._id,
  });

  let contractInfo;
  try {
    contractInfo = await reach.launchRide(passenger, driver, body.price, ride._id);
  } catch (error: any) {
    console.log(`could not launch ride | RideId: ${ride._id} | Error: ${error.stack}`);
    socketConnectionManager.sendRideDeployed([passenger.username, driver.username], ride._id, false);
    await rideModel.updateStatus(ride._id, RideStatus.Failed);
    return;
  }

  await rideModel.updateContractInfo(ride._id, contractInfo);

  console.log(
    `ride created | Passenger: ${passengerDb.username} | Driver: ${driverDb.username} |  RideId: ${ride._id}  | ContractInfo: ${contractInfo} | Price: ${body.price}`
  );
}

export async function startRide(req: Request, res: Response): Promise<Response> {
  const body = req.body;
  const params = req.params;

  if (!params.id) {
    return res.status(400).json({ message: 'id is required' });
  }

  if (!body.username) {
    return res.status(400).json({ message: 'username is required' });
  }

  const ride = await rideModel.findById(params.id);

  if (!ride) {
    return res.status(400).json({ message: 'ride not found' });
  }

  let isPassenger = false;
  let user;
  if (ride.passenger.username === body.username) {
    user = ride.passenger;
    isPassenger = true;
  } else if (ride.driver.username === body.username) {
    user = ride.driver;
    isPassenger = false;
  }

  if (!user) {
    return res.status(400).json({ message: 'user not found' });
  }

  if (!ride.contractInfo || ride.status !== RideStatus.Deployed) {
    return res.status(400).json({ message: 'contract not deployed' });
  }

  try {
    await reach.startRide(user, ride.contractInfo);
  } catch (error: any) {
    console.log(`could not start ride | RideId: ${ride._id} | Error: ${error.stack}`);
    await rideModel.updateStatus(ride._id, RideStatus.Failed);
    return res.status(500).json({ message: error.message });
  }

  isPassenger ? (ride.passengerStats.started = true) : (ride.driverStats.started = true);

  await (ride as any).save();

  if (!ride.passengerStats.started || !ride.driverStats.started) {
    reach.timeOutedAdminInterfereStart(ride.contractInfo, ride._id, Config.RIDE_START_WAITING_FOR_OTHER_USER_TIMEOUT);
  }

  console.log(`ride started | RideId: ${ride._id} | User: ${user.username} | IsPassenger: ${isPassenger}`);

  return res.status(200).json({ message: `ride started for ${user.username}` });
}

export async function endRide(req: Request, res: Response): Promise<Response> {
  const body = req.body;
  const params = req.params;

  if (!params.id) {
    return res.status(400).json({ message: 'id is required' });
  }

  if (!body.username) {
    return res.status(400).json({ message: 'username is required' });
  }

  const ride = await rideModel.findById(params.id);

  if (!ride) {
    return res.status(400).json({ message: 'ride not found' });
  }

  let isPassenger = false;
  let user;
  if (ride.passenger.username === body.username) {
    user = ride.passenger;
    isPassenger = true;
  } else if (ride.driver.username === body.username) {
    user = ride.driver;
    isPassenger = false;
  }

  if (!user) {
    return res.status(400).json({ message: 'user not found' });
  }

  if (!ride.contractInfo || ride.status !== RideStatus.Started) {
    return res.status(400).json({ message: 'ride not started' });
  }

  try {
    await reach.endRide(user, ride.contractInfo);
  } catch (error: any) {
    console.log(`could not end ride | RideId: ${ride._id} | Error: ${error.stack}`);
    await rideModel.updateStatus(ride._id, RideStatus.Failed);
    return res.status(500).json({ message: error.message });
  }

  isPassenger ? (ride.passengerStats.ended = true) : (ride.driverStats.ended = true);

  await (ride as any).save();

  socketConnectionManager.clearIntervalsByUsernames([user.username]);

  console.log(`ride ended | RideId: ${ride._id} | User: ${user.username} | IsPassenger: ${isPassenger}`);

  return res.status(200).json({ message: `ride ended for ${user.username}` });
}

export async function requestRide(req: Request, res: Response): Promise<Response> {
  const body = req.body;

  try {
    JoiValidation.validate(requestRideSchema, body);
  } catch (error) {
    return res.status(400).json({ error });
  }
  const user = await userModel.findByUsername(body.username);

  if (!user) {
    return res.status(400).json({ message: 'user not found' });
  }

  if (!user.address) {
    return res.status(400).json({ message: 'user has no address' });
  }

  const rides = await rideModel.findInProgressRidesForUser(body.username);
  if (rides.length > 0) {
    return res.status(400).json({ message: 'user has already requested a ride' });
  }

  const ride = await rideModel.createRide(user, body.from_coordinates, body.to_coordinates);

  socketConnectionManager.broadcastMessage([user.username], MessageType.RideRequested, { ride });

  console.log(`ride requested | RideId: ${ride._id} | Passenger: ${user.username}`);

  return res.status(200).json(ride);
}

export async function getAllRequestedRides(req: Request, res: Response): Promise<Response> {
  if (!req.query.username) {
    return res.status(400).json({ message: 'username is required' });
  }

  const username = req.query.username as string;

  const user = await userModel.findByUsername(username);

  if (!user) {
    return res.status(400).json({ message: 'user not found' });
  }

  const rides = await rideModel.findRequestedRides(username);

  console.log(`requested rides fetched | User: ${user.username}`);
  return res.status(200).json(rides);
}

function computeDriverBidStatuses(rides: IRideDb[], username: string) {
  rides.forEach((ride: IRideDb) => {
    if (ride.bids.length == 0) {
      (ride as any).driverBidStatus = DriverBidStatus.NoBids;
      return;
    }

    for (let i = 0; i < ride.bids.length; i++) {
      if (ride.bids[i].username === username) {
        if (i === 0) {
          (ride as any).driverBidStatus = DriverBidStatus.LeadingBid;
          return;
        } else {
          (ride as any).driverBidStatus = DriverBidStatus.AlreadyBid;
          return;
        }
      } else {
        (ride as any).driverBidStatus = DriverBidStatus.DidntBid;
      }
    }
  });
}

export async function bidOnRide(req: Request, res: Response): Promise<Response> {
  const body = req.body;

  try {
    JoiValidation.validate(bidOnRideSchema, body);
  } catch (error) {
    return res.status(400).json({ error });
  }

  const username = body.username;
  const rideId = req.params.id as string;
  const amount = body.amount * 1000000;

  const user = await userModel.findByUsername(username);

  if (!user) {
    return res.status(400).json({ message: 'user not found' });
  }

  const ride = await rideModel.findById(rideId);

  if (!ride) {
    return res.status(400).json({ message: 'ride not found' });
  }

  if (ride.status !== RideStatus.Requested) {
    return res.status(400).json({ message: 'ride not requested' });
  }

  if (ride.passenger.username === username) {
    return res.status(400).json({ message: 'user is passenger' });
  }

  const bid = ride.bids.find((bid) => bid.username === username);
  if (bid) {
    if (amount < bid.amount) {
      return res.status(400).json({ message: 'user already bid with the lower amount' });
    } else {
      bid.amount = amount;
    }
  } else {
    ride.bids.push({ username: username, amount });
  }

  await (ride as any).save();

  const data = {
    rideId: ride._id,
    bids: ride.bids
      .sort((a, b) => b.amount - a.amount)
      .map((bid) => {
        return {
          username: bid.username,
          amount: bid.amount,
        };
      }),
  };

  socketConnectionManager.broadcastMessage([], MessageType.Bid, data);

  console.log(`Bid accepted | User: ${user.username} | RideId: ${ride._id} | Amount: ${body.amount}`);
  return res.status(200).send(ride);
}

export async function getRide(req: Request, res: Response): Promise<Response> {
  const rideId = req.params.id as string;

  const ride = await rideModel.findById(rideId);

  if (!ride) {
    return res.status(404).json({ message: 'ride not found' });
  }

  ride.bids.sort((a, b) => b.amount - a.amount);

  return res.status(200).json(ride);
}

export async function cancelRide(req: Request, res: Response): Promise<Response> {
  const rideId = req.params.id as string;

  const body = req.body;

  if (!body.username) {
    return res.status(400).json({ message: 'username is required' });
  }

  const ride = await rideModel.findById(rideId);

  if (!ride) {
    return res.status(404).json({ message: 'ride not found' });
  }

  if (ride.status !== RideStatus.Requested) {
    return res.status(400).json({ message: 'ride not requested' });
  }

  await rideModel.deleteRideById(rideId);

  socketConnectionManager.broadcastMessage([body.username], MessageType.RideCanceled, { _id: ride._id });

  return res.status(200).json({ message: 'ride canceled' });
}
