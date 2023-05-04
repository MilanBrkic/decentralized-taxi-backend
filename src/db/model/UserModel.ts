import mongoose, { Schema } from 'mongoose';
import { IUserDb } from '../interface/IUserDb';

export const userSchema = new Schema({
  password: String,
  username: String,
  phoneNumber: String,
  address: String,
  encryptedMnemonic: String,
});

class UserModel {
  private model;
  constructor() {
    this.model = mongoose.model('users', userSchema);
  }

  public async findByAddress(address: string): Promise<IUserDb | null> {
    const user = (await this.model.find({ address }).exec())[0];
    return user as unknown as IUserDb;
  }

  public async findByEncryptedMnemonic(encryptedMnemonic: string): Promise<IUserDb | null> {
    const user = (await this.model.find({ encryptedMnemonic }).exec())[0];
    return user as unknown as IUserDb;
  }

  public async findByPhoneNumber(phoneNumber: string): Promise<IUserDb | null> {
    const user = (await this.model.find({ phoneNumber }).exec())[0];
    return user as unknown as IUserDb;
  }

  public async findByUsername(username: string): Promise<any | null> {
    const user = (await this.model.find({ username }).exec())[0];
    return user as unknown as IUserDb;
  }

  public async insert(username: string, password: string, phoneNumber: string): Promise<any | null> {
    return this.model.create({ username, password, phoneNumber });
  }
}

const userModel = new UserModel();
export default userModel;
