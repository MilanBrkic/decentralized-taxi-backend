import express, { Request, Response, NextFunction } from 'express';
import {
  acceptRide,
  bidOnRide,
  cancelRide,
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

  app.use(timerMiddleware);
  app.use(express.json());
  app.use(cors());
  app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello World!' });
  });

  app.post('/ping', (req, res) => {
    return res.send('pong');
  });
  app.post('/register', register);
  app.post('/login', login);
  app.post('/wallet', addWallet);
  app.get('/user/:username', getUser);
  app.get('/ride/get-requested', getAllRequestedRides);
  app.post('/ride', requestRide);
  app.post('/ride/:id/accept', acceptRide);
  app.post('/ride/:id/start', startRide);
  app.post('/ride/:id/end', endRide);
  app.post('/ride/:id/bid', bidOnRide);
  app.post('/ride/:id/cancel', cancelRide);
  app.get('/ride/:id', getRide);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

const timerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = new Date();
  console.log(`Received ${req.method} ${req.originalUrl}`);

  res.on('finish', () => {
    const elapsed = new Date().getTime() - start.getTime();
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} in ${elapsed}ms`);
  });
  next();
};
