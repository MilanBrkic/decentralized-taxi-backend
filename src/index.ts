import { mongooseDb } from './db';
import { initHttpServer } from './rest';
import { ReachService } from './services/ReachService';

export const reach = new ReachService();
initHttpServer();
mongooseDb.connect();
