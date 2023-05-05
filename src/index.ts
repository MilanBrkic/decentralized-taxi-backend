import { mongooseDb } from './db';
import { initHttpServer } from './rest';
import { reach } from './services/Reach';

initHttpServer();
mongooseDb.connect();
reach.init();
