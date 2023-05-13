import Joi from 'joi';

export const registerSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required().min(6),
  phone_number: Joi.string().required(),
});

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const addWalletSchema = Joi.object({
  username: Joi.string().required(),
  mnemonic: Joi.string().required(),
});
export const coordinatesSchema = Joi.object({
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});

export const createRideSchema = Joi.object({
  passenger_username: Joi.string().required(),
  driver_username: Joi.string().required(),
  from_coordinates: coordinatesSchema.required(),
  to_coordinates: coordinatesSchema.required(),
  price: Joi.number().required(),
});

export const bidOnRideSchema = Joi.object({
  username: Joi.string().required(),
  amount: Joi.number().required(),
});

export const requestRideSchema = Joi.object({
  username: Joi.string().required(),
  from_coordinates: coordinatesSchema.required(),
  to_coordinates: coordinatesSchema.required(),
});
