import mongoose, { Schema } from 'mongoose';
import { ICoordinatesDb } from '../interface/ICoordinatesDb';
import { IUserDb } from '../interface/IUserDb';
import { RideStatus } from '../../enums/RideStatus';
import { coordinateModelSchema } from './CoordinateModel';
import { userSchema } from './UserModel';

const rideSchema = new Schema({
  passenger: userSchema,
  driver: userSchema,
  fromCoordinates: coordinateModelSchema,
  toCoordinates: coordinateModelSchema,
  price: Number,
  status: String,
  createdAt: Date,
  updatedAt: Date,
});

class RideModel {
  private model;
  constructor() {
    this.model = mongoose.model('rides', rideSchema);
  }

  public async create(
    passenger: IUserDb,
    driver: IUserDb,
    fromCoordinates: ICoordinatesDb,
    toCoordinates: ICoordinatesDb,
    price: number
  ): Promise<any | null> {
    return this.model.create({
      passenger,
      driver,
      fromCoordinates,
      toCoordinates,
      price,
      status: RideStatus.Created,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}

const rideModel = new RideModel();
export default rideModel;
