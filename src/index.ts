import { mongoDb } from './db/MongoDb';
import { initHttpServer } from './rest';
import { ReachService } from './services/ReachService';

export const reach = new ReachService();
initHttpServer();
mongoDb.connect();
