import { Request, Response } from 'express';
import rideModel from '../db/model/RideModel';
import userModel from '../db/model/UserModel';
import { User } from '../entities/User';
import { createRideSchema } from './validation/Schemas';
import { JoiValidation } from './validation/Validation';
import { reach } from './ReachService';
import { RideStatus } from '../enums/RideStatus';
import Config from '../config/Config';

export async function createRide(req: Request, res: Response): Promise<Response> {
  const body = req.body;

  try {
    JoiValidation.validate(createRideSchema, body);
  } catch (error) {
    return res.status(400).json({ error });
  }

  if (body.passenger_username === body.driver_username) {
    return res.status(400).json({ error: 'passenger and driver cannot be the same user' });
  }

  const [passengerDb, driverDb] = await Promise.all([
    userModel.findByUsername(body.passenger_username),
    userModel.findByUsername(body.driver_username),
  ]);

  if (!passengerDb) {
    return res.status(400).json({ error: 'passenger not found' });
  }

  if (!driverDb) {
    return res.status(400).json({ error: 'driver not found' });
  }

  const ride = await rideModel.create(passengerDb, driverDb, body.from_coordinates, body.to_coordinates, body.price);

  console.log(
    `Ride inserted in db, waiting for it's contract to be deployed | Passenger: ${passengerDb.username} | Driver: ${driverDb.username} | RideId: ${ride._id}`
  );

  const passenger = new User(passengerDb);
  const driver = new User(driverDb);

  let contractInfo;
  try {
    await Promise.all([passenger.setWallet(), driver.setWallet()]);
    contractInfo = await reach.launchRide(passenger, driver, body.price, ride._id);
  } catch (error: any) {
    console.log(`could not launch ride | RideId: ${ride._id} | Error: ${error.stack}`);
    return res.status(500).json({ error: 'could not launch ride' });
  }

  await rideModel.updateContractInfo(ride._id, contractInfo);

  console.log(
    `ride created | Passenger: ${passengerDb.username} | Driver: ${driverDb.username} |  RideId: ${ride._id}  | ContractInfo: ${contractInfo} | Price: ${body.price}`
  );
  return res.status(200).json({ message: 'ride started', ride_id: ride._id });
}

export async function startRide(req: Request, res: Response): Promise<Response> {
  const body = req.body;
  const params = req.params;

  if (!params.id) {
    return res.status(400).json({ error: 'id is required' });
  }

  if (!body.username) {
    return res.status(400).json({ error: 'username is required' });
  }

  const ride = await rideModel.findById(params.id);

  if (!ride) {
    return res.status(400).json({ error: 'ride not found' });
  }

  const user =
    ride.passenger.username === body.username
      ? ride.passenger
      : ride.driver.username === body.username
      ? ride.driver
      : null;

  if (!user) {
    return res.status(400).json({ error: 'user not found' });
  }

  if (!ride.contractInfo || ride.status !== RideStatus.Deployed) {
    return res.status(400).json({ error: 'contract not deployed' });
  }

  try {
    await reach.startRide(user, ride.contractInfo);
  } catch (error: any) {
    console.log(`could not start ride | RideId: ${ride._id} | Error: ${error.stack}`);
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'ride started for' });
}
