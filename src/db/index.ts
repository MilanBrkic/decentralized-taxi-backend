import mongoose, { Mongoose } from 'mongoose';
import Config from '../config/Config';

class MongooseDatabase {
  public mongoose!: Mongoose;

  public async connect() {
    try {
      this.mongoose = await mongoose.connect(`${Config.MONGO_BASE_CONNECTION_URL}`);
      console.log('Connected to mongoDb');
    } catch (error: any) {
      console.log(`Failed to connect to mnogoDb | Reason: ${error?.stack}`);
    }
  }
}

export const mongooseDb = new MongooseDatabase();
