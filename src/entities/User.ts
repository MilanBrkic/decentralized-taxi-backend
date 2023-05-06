import { IUserDb } from '../db/interface/IUserDb';
import { encryptService } from '../services/EncryptService';
import { reach } from '../services/Reach';
import { IAccount } from '@reach-sh/stdlib/dist/types/shared_impl';
import { IRideDb } from '../db/interface/IRideDb';
import rideModel from '../db/model/RideModel';

export class User implements IUserDb {
  username: string;
  phoneNumber: string;
  password: string;
  address: string;
  encryptedMnemonic: string;
  wallet!: IAccount<any, any, any, any, any>;
  balance!: number;
  ridesAsDriver!: IRideDb[];
  ridesAsPassenger!: IRideDb[];
  constructor(db: IUserDb) {
    this.username = db.username;
    this.phoneNumber = db.phoneNumber;
    this.password = db.password;
    this.address = db.address;
    this.encryptedMnemonic = db.encryptedMnemonic;
  }

  public async setWallet(): Promise<void> {
    const mnemonic = encryptService.decrypt(this.encryptedMnemonic);
    this.wallet = await reach.newAccountFromMnemonic(mnemonic);
  }

  public async setBalance(): Promise<void> {
    const balance = await reach.getBalanceStandardUnit(this.wallet);
    this.balance = balance;
  }

  public async setRides(): Promise<void> {
    const rides = await rideModel.findRidesByUsername(this.username);
    this.ridesAsDriver = rides.filter((ride) => ride.driver.username === this.username);
    this.ridesAsPassenger = rides.filter((ride) => ride.passenger.username === this.username);
  }
}
