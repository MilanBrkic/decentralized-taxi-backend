import { RideStatus } from '../enums/RideStatus';
import { ICoordinates } from './Coordinates';
import { IUser } from './User';

export interface IRide {
  passenger: IUser;
  driver: IUser;
  fromCoordinates: ICoordinates;
  toCoordinates: ICoordinates;
  price: number;
  status: RideStatus;
  createdAt: Date;
  updatedAt: Date;
}
