import { RideStatus } from '../../enums/RideStatus';
import { ICoordinatesDb } from './ICoordinatesDb';
import { IUserDb } from './IUserDb';

export interface IRideDb {
  _id: string;
  passenger: IUserDb;
  driver: IUserDb;
  fromCoordinates: ICoordinatesDb;
  toCoordinates: ICoordinatesDb;
  price: number;
  status: RideStatus;
  createdAt: Date;
  updatedAt: Date;
}
