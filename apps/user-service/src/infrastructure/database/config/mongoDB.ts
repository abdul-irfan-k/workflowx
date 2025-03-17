import mongoose from 'mongoose';
import { DATABASE_URL } from '../../../config/env';
import logger from '../../../utils/logger';

export const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    logger.info('MongoDB connected');
  } catch (error) {
    logger.error('MongoDB connection failed');
  }
};
