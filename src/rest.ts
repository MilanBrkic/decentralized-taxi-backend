import express from 'express';
import crypto from 'crypto';
import { getBalance, register } from './services/Users';
import Config from '../config/Config';
import { encryptService } from './services/EncryptService';

export function initHttpServer() {
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello World!' });
  });

  app.post('/register', register);
  app.get('/balance', getBalance);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
