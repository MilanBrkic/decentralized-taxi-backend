import { RideStatus } from '../../enums/RideStatus';
import { ReachContractInfo } from '../../types/ReachTypes';
import { ICoordinatesDb } from './ICoordinatesDb';
import { IPaymentInfoDb } from './IPaymentInfoDb';
import { IUserDb } from './IUserDb';
import { IUserStatsDb } from './IUserStatsDb';

export interface IRideDb {
  _id: string;
  passenger: IUserDb;
  passengerStats: IUserStatsDb;
  driver: IUserDb;
  driverStats: IUserStatsDb;
  fromCoordinates: ICoordinatesDb;
  toCoordinates: ICoordinatesDb;
  price: number;
  status: RideStatus;
  createdAt: Date;
  updatedAt: Date;
  paymentInfo: IPaymentInfoDb;
  contractInfo: ReachContractInfo;
  bids: DriverBid[];
}

export type DriverBid = { username: string; amount: number };
