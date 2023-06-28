import { mongooseDb } from './db';
import { initHttpServer } from './rest';
import { reach } from './services/Reach';
import { socketConnectionManager } from './services/web-sockets/SocketConnectionManager';

async function init() {
  await mongooseDb.connect();
  await reach.init();
  socketConnectionManager.init();
  initHttpServer();
}

init();
