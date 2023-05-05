import express from 'express';
import { createRide, startRide } from './services/RideService';
import { addWallet, login, register } from './services/UserService';

export function initHttpServer() {
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello World!' });
  });

  app.post('/register', register);
  app.post('/login', login);
  app.post('/wallet', addWallet);
  app.post('/ride', createRide);
  app.post('/ride/:id/start', startRide);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
