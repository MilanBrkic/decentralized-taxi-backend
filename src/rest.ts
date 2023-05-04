import express from 'express';
import crypto from 'crypto';
import { addWallet, login, register } from './services/Users';
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
  app.post('/login', login);
  app.post('/wallet', addWallet);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
