import { Request, Response } from 'express';
import rideModel from '../db/model/RideModel';
import userModel from '../db/model/UserModel';
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

  const [passenger, driver] = await Promise.all([
    userModel.findByUsername(body.passenger_username),
    userModel.findByUsername(body.driver_username),
  ]);

  if (!passenger) {
    return res.status(400).json({ error: 'passenger not found' });
  }

  if (!driver) {
    return res.status(400).json({ error: 'driver not found' });
  }

  await rideModel.create(passenger, driver, body.from_coordinates, body.to_coordinates, body.price);

  console.log(`ride created | Passenger: ${passenger.username} | Driver: ${driver.username}`);
  return res.status(200).json({ message: 'ride started' });
}
