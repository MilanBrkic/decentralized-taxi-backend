import { ICoordinatesDb } from '../../../db/interface/ICoordinatesDb';
import { IRideDb } from '../../../db/interface/IRideDb';
import { IUserDb } from '../../../db/interface/IUserDb';

export interface IReturnDriverLocationData {
  location: ICoordinatesDb;
  ride: IRideDb;
}
