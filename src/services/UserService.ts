import { Request, Response } from 'express';
import Joi from 'joi';
import userModel from '../db/model/UserModel';
import { JoiValidation } from './validation/Validation';
import { addWalletSchema, loginSchema, registerSchema } from './validation/Schemas';
import { encryptService } from './EncryptService';
import { reach } from './Reach';
import { User } from '../entities/User';

export async function register(req: Request, res: Response): Promise<Response> {
  const body = req.body;

  try {
    JoiValidation.validate(registerSchema, body);
  } catch (error) {
    return res.status(400).json({ error });
  }

  const user = await userModel.findByUsername(body.username);
  if (user) {
    return res.status(400).json({ message: 'username already taken' });
  } else {
    const phoneNumber = body.phone_number.replace(/[-_\s,]/g, '');
    const userByPhone = await userModel.findByPhoneNumber(phoneNumber);
    if (userByPhone) {
      return res.status(400).json({ message: 'phone number already taken' });
    } else {
      const encryptedPassword = encryptService.hash(body.password);
      const registeredUser = await userModel.insert(body.username, encryptedPassword, phoneNumber);
      console.log(`User registered ${registeredUser.username} ${registeredUser.phoneNumber}`);
      return res.status(200).json({
        username: registeredUser.username,
        phoneNumber: registeredUser.phoneNumber,
        address: registeredUser.address,
      });
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
    return res.status(400).json({ message: 'user not found' });
  } else {
    const encryptedPassword = encryptService.hash(body.password);
    if (user.password !== encryptedPassword) {
      return res.status(400).json({ message: 'wrong password' });
    } else {
      const enricherUser = new User(user);
      await enricherUser.setWallet();
      await enricherUser.setBalance();
      await enricherUser.setRides();

      return res.status(200).json({
        username: user.username,
        phoneNumber: user.phoneNumber,
        address: user.address,
        balance: enricherUser.balance,
        ridesAsDriver: enricherUser.ridesAsDriver,
        ridesAsPassenger: enricherUser.ridesAsPassenger,
      });
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

export async function addWallet(req: Request, res: Response): Promise<Response> {
  const body = req.body;

  try {
    JoiValidation.validate(addWalletSchema, body);
    validateMnemonic(body.mnemonic);
  } catch (error) {
    return res.status(400).json({ error });
  }

  const address = await reach.newAccountFromMnemonic(body.mnemonic);
  const userByAddress = await userModel.findByAddress(address.networkAccount.addr);
  if (userByAddress) {
    return res.status(400).json({ message: 'address is already used in app' });
  }

  const userByUsername = await userModel.findByUsername(body.username);
  if (!userByUsername) {
    return res.status(400).json({ message: 'user not found' });
  }

  userByUsername.address = address.networkAccount.addr;
  userByUsername.encryptedMnemonic = encryptService.encrypt(body.mnemonic);

  await userByUsername.save();

  return res.status(200).json({ message: 'wallet added' });
}
