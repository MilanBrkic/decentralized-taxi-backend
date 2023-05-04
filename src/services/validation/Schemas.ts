import Joi from 'joi';

export const registerSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(6),
  phoneNumber: Joi.string().required(),
});

const mnemonicSchema = Joi.object({
  mnemonic: Joi.string().required(),
});
