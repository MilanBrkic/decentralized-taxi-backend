import mongoose, { Schema } from 'mongoose';
import { ICoordinatesDb } from '../interface/ICoordinatesDb';
import { IUserDb } from '../interface/IUserDb';
import { RideStatus } from '../../enums/RideStatus';
import { coordinateModelSchema } from './CoordinateModel';
import { userSchema } from './UserModel';
import { IRideDb } from '../interface/IRideDb';
import { ReachContractInfo } from '../../types/ReachTypes';
import { defaultUserStats, userStatsModelSchema } from './UserStatsModel';
import { paymentInfoModelSchema } from './PaymentInfoModel';

const rideSchema = new Schema({
  passenger: userSchema,
  passengerStats: {
    type: userStatsModelSchema,
    default: defaultUserStats,
  },
  driver: userSchema,
  driverStats: { type: userStatsModelSchema, default: defaultUserStats },
  fromCoordinates: coordinateModelSchema,
  toCoordinates: coordinateModelSchema,
  price: Number,
  status: { type: String, default: RideStatus.Created },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  paymentInfo: paymentInfoModelSchema,
  contractInfo: Object,
  bids: { type: [{ username: String, amount: Number }], default: [] },
});

class RideModel {
  private model;
  constructor() {
    this.model = mongoose.model('rides', rideSchema);
  }

  public async createRide2(passenger: IUserDb) {
    const ride = this.model.create({
      passenger,
      status: RideStatus.Requested,
    });
    return ride as unknown as IRideDb;
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

  public async findRidesByUsername(username: string): Promise<IRideDb[]> {
    const rides = await this.model
      .find({
        $or: [{ 'passenger.username': username }, { 'driver.username': username }],
      })
      .exec();
    return rides as unknown as IRideDb[];
  }

  public async findInProgressRidesForUser(username: string): Promise<IRideDb[]> {
    const excludedStatuses = [RideStatus.Ended, RideStatus.BeforeEndTimeout, RideStatus.BeforeStartTimeout];

    const rides = await this.model
      .find({
        $or: [{ 'passenger.username': username }, { 'driver.username': username }],
        status: { $nin: excludedStatuses },
      })
      .exec();
    return rides as unknown as IRideDb[];
  }

  public async findRequestedRides(username: string): Promise<IRideDb[]> {
    const rides = await this.model
      .find({
        'status': RideStatus.Requested,
        'passenger.username': { $ne: username },
      })
      .sort({ createdAt: 'desc' })
      .exec();
    return rides as unknown as IRideDb[];
  }

  public async deleteRideById(rideId: string): Promise<void> {
    await this.model.deleteOne({ _id: rideId }).exec();
  }
}

const rideModel = new RideModel();
export default rideModel;
