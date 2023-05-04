import mongoose, { Schema } from 'mongoose';
import { IUser } from '../../entities/User';
const userSchema = new Schema({
  password: String,
  username: String,
  phoneNumber: String,
});

class UserModel {
  private model;
  constructor() {
    this.model = mongoose.model('users', userSchema);
  }

  public async findByAddress(address: string): Promise<IUser | null> {
    const user = (await this.model.find({ address }).exec())[0];
    return user as unknown as IUser;
  }

  public async findByEncryptedMnemonic(encryptedMnemonic: string): Promise<IUser | null> {
    const user = (await this.model.find({ encryptedMnemonic }).exec())[0];
    return user as unknown as IUser;
  }

  public async findByPhoneNumber(phoneNumber: string): Promise<IUser | null> {
    const user = (await this.model.find({ phoneNumber }).exec())[0];
    return user as unknown as IUser;
  }

  public async findByUsername(username: string): Promise<IUser | null> {
    const user = (await this.model.find({ username }).exec())[0];
    return user as unknown as IUser;
  }

  public async insert(username: string, password: string, phoneNumber: string): Promise<any | null> {
    return this.model.create({ username, password, phoneNumber });
  }
}

const userModel = new UserModel();
export default userModel;
