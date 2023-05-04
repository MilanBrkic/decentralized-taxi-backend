import { IUserDb } from '../db/interface/IUserDb';
import { encryptService } from '../services/EncryptService';
import { reach } from '../services/ReachService';
export class User implements IUserDb {
  username: string;
  phoneNumber: string;
  password: string;
  address: string;
  encryptedMnemonic: string;
  wallet: any;
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
}
