import { Schema } from 'mongoose';

export const paymentInfoModelSchema = new Schema({
  passengerNet: Number,
  driverNet: Number,
  adminNet: Number,
});
