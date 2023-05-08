import express from 'express';
import {
  arrangeRide,
  bidOnRide,
  endRide,
  getAllRequestedRides,
  getRide,
  requestRide,
  startRide,
} from './services/RideService';
import { addWallet, getUser, login, register } from './services/UserService';
import cors from 'cors';
export function initHttpServer() {
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.use(cors());
  app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello World!' });
  });

  app.post('/register', register);
  app.post('/login', login);
  app.post('/wallet', addWallet);
  app.get('/user/:username', getUser);
  app.get('/ride/get-requested', getAllRequestedRides);
  app.post('/ride', requestRide);
  app.post('/ride/:id/arrange', arrangeRide);
  app.post('/ride/:id/start', startRide);
  app.post('/ride/:id/end', endRide);
  app.post('/ride/:id/bid', bidOnRide);
  app.get('/ride/:id', getRide);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
