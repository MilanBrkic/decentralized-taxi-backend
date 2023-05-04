import express from 'express';
import { getBalance, signIn } from './services/wallet';

export function initHttpServer() {
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.get('/', (req, res) => {});

  app.post('/sign-in', signIn);
  app.get('/balance', getBalance);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
