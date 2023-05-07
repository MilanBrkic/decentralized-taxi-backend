import { mongooseDb } from './db';
import { initHttpServer } from './rest';
import { reach } from './services/Reach';
import { socketConnectionManager } from './services/web-sockets/SocketConnectionManager';

initHttpServer();
mongooseDb.connect();
reach.init();
socketConnectionManager.init();
