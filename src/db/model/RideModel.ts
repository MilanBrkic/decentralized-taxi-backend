import mongoose, { Schema } from 'mongoose';
import { ICoordinatesDb } from '../interface/ICoordinatesDb';
import { IUserDb } from '../interface/IUserDb';
import { RideStatus } from '../../enums/RideStatus';
import { coordinateModelSchema } from './CoordinateModel';
import { userSchema } from './UserModel';
import { IRideDb } from '../interface/IRideDb';
import { ReachContractInfo } from '../../types/ReachTypes';

const rideSchema = new Schema({
  passenger: userSchema,
  driver: userSchema,
  fromCoordinates: coordinateModelSchema,
  toCoordinates: coordinateModelSchema,
  price: Number,
  status: String,
  createdAt: Date,
  updatedAt: Date,
  contractInfo: Object,
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
  ): Promise<IRideDb> {
    const ride = this.model.create({
      passenger,
      driver,
      fromCoordinates,
      toCoordinates,
      price,
      status: RideStatus.Created,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return ride as unknown as IRideDb;
  }

  public async updateStatus(rideId: string, status: RideStatus): Promise<void> {
    await this.model.updateOne({ _id: rideId }, { status, updatedAt: new Date() }).exec();
  }

  public async updateContractInfo(rideId: string, contractInfo: ReachContractInfo): Promise<void> {
    await this.model.updateOne({ _id: rideId }, { contractInfo, updatedAt: new Date() }).exec();
  }

  public async findById(rideId: string): Promise<IRideDb> {
    const ride = await this.model.findById(rideId).exec();
    return ride as unknown as IRideDb;
  }
}

const rideModel = new RideModel();
export default rideModel;
