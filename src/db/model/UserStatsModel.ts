import { Schema } from 'mongoose';

export const userStatsModelSchema = new Schema({
  started: { type: Boolean, default: false },
  ended: { type: Boolean, default: false },
  wasAtEndLocation: { type: Boolean, default: false },
});

export const defaultUserStats = {
  started: false,
  ended: false,
  wasAtEndLocation: false,
};
