import { Schema } from 'mongoose';

export const coordinateModelSchema = new Schema({
  latitude: String,
  longitude: String,
});
