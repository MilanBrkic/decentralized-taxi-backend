import { Request, Response } from 'express';
import { reach } from '..';

export async function signIn(req: Request, res: Response): Promise<Response> {
  const body = req.body;
  if (!body || !body.mnemonic) {
    return res.status(400).json({ message: 'Mnemonic is required' });
  }

  await reach.newAccountFromMnemonic(body.mnemonic);
  return res.status(200).json({ message: 'Wallet signed in' });
}

export async function getBalance(req: Request, res: Response): Promise<Response> {
  await reach.getBalance();
  return res.status(200).json({ message: 'wallet created' });
}
