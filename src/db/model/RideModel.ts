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

  public async createRide(passenger: IUserDb, fromCoordinates: ICoordinatesDb, toCoordinates: ICoordinatesDb) {
    const ride = this.model.create({
      passenger,
      status: RideStatus.Requested,
      fromCoordinates,
      toCoordinates,
    });
    return ride as unknown as IRideDb;
  }

  public async updateStatus(rideId: string, status: RideStatus): Promise<void> {
    await this.model.updateOne({ _id: rideId }, { status, updatedAt: new Date() }).exec();
  }

  public async updateContractInfo(rideId: string, contractInfo: ReachContractInfo): Promise<void> {
    await this.model.updateOne({ _id: rideId }, { contractInfo, updatedAt: new Date() }).exec();
  }

  public async updateAcceptRide(rideId: string, driver: IUserDb, price: number): Promise<IRideDb> {
    return (await this.model
      .findByIdAndUpdate(rideId, { driver, price, status: RideStatus.Created, updatedAt: new Date() })
      .exec()) as unknown as IRideDb;
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
    const excludedStatuses = [
      RideStatus.Ended,
      RideStatus.BeforeEndTimeout,
      RideStatus.BeforeStartTimeout,
      RideStatus.Failed,
    ];

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

  public async updatePassengerStats(rideId: string, wasAtEndLocation: boolean, isPassenger: boolean): Promise<void> {
    const updateObject = isPassenger
      ? { 'passengerStats.wasAtEndLocation': wasAtEndLocation, 'updatedAt': new Date() }
      : { 'driverStats.wasAtEndLocation': wasAtEndLocation, 'updatedAt': new Date() };

    await this.model.updateOne({ _id: rideId }, updateObject).exec();
  }
}

const rideModel = new RideModel();
export default rideModel;
