import { Request, Response } from 'express';
import Joi from 'joi';
import { reach } from '..';
import userModel from '../db/model/UserModel';
import { JoiValidation } from './validation/Validation';
import { loginSchema, registerSchema } from './validation/Schemas';
import { encryptService } from './EncryptService';

export async function register(req: Request, res: Response): Promise<Response> {
  const body = req.body;

  try {
    JoiValidation.validate(registerSchema, body);
  } catch (error) {
    return res.status(400).json({ error });
  }

  const user = await userModel.findByUsername(body.username);
  if (user) {
    return res.status(400).json({ error: 'username already taken' });
  } else {
    const phoneNumber = body.phoneNumber.replace(/[-_\s,]/g, '');
    const userByPhone = await userModel.findByPhoneNumber(phoneNumber);
    if (userByPhone) {
      return res.status(400).json({ error: 'phone number already taken' });
    } else {
      const encryptedPassword = encryptService.hash(body.password);
      await userModel.insert(body.username, encryptedPassword, phoneNumber);
      return res.status(200).json({ message: 'user created' });
    }
  }
}

export async function login(req: Request, res: Response): Promise<Response> {
  const body = req.body;

  try {
    JoiValidation.validate(loginSchema, body);
  } catch (error) {
    return res.status(400).json({ error });
  }

  const user = await userModel.findByUsername(body.username);
  if (!user) {
    return res.status(400).json({ error: 'user not found' });
  } else {
    const encryptedPassword = encryptService.hash(body.password);
    if (user.password !== encryptedPassword) {
      return res.status(400).json({ error: 'wrong password' });
    } else {
      const { phoneNumber, username } = user;
      return res.status(200).json({ phoneNumber, username });
    }
  }
}

function validateMnemonic(mnemonic: string): void {
  JoiValidation.validate(Joi.object({ mnemonic: Joi.string().required() }), { mnemonic });

  const words = mnemonic.split(' ');
  const uniqueWords = new Set(words);
  if (uniqueWords.size !== 25) {
    throw Error('Mnemonic must be 25 words');
  }
}

export async function getBalance(req: Request, res: Response): Promise<Response> {
  await reach.getBalance();
  return res.status(200).json({ message: 'wallet created' });
}
