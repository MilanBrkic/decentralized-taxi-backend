import { Request, Response } from 'express';
import rideModel from '../db/model/RideModel';
import userModel from '../db/model/UserModel';
import { User } from '../entities/User';
import { createRideSchema } from './validation/Schemas';
import { JoiValidation } from './validation/Validation';

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

  await rideModel.create(passengerDb, driverDb, body.from_coordinates, body.to_coordinates, body.price);

  const passenger = new User(passengerDb);
  const driver = new User(driverDb);

  await Promise.all([passenger.setWallet(), driver.setWallet()]);

  console.log(`ride created | Passenger: ${passengerDb.username} | Driver: ${driverDb.username}`);
  return res.status(200).json({ message: 'ride started' });
}
