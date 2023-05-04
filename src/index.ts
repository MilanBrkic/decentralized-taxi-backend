import { mongooseDb } from './db';
import { initHttpServer } from './rest';
import { reach, ReachService } from './services/ReachService';

initHttpServer();
mongooseDb.connect();
reach.init();
