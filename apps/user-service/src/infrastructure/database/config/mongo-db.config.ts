import mongoose from 'mongoose';
import { DATABASE_URL } from '@config/env';
import logger from '@utils/logger';

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(DATABASE_URL);
    logger.info('Successfully connected to MongoDB.');
  } catch (error) {
    logger.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export async function disconnectDB(): Promise<void> {
  try {
    await mongoose.disconnect();
    logger.info('Successfully disconnected from MongoDB.');
  } catch (error) {
    logger.error('Error disconnecting from MongoDB:', error);
    throw error;
  }
}

export const MongoDB = {
  connect: connectDB,
  disconnect: disconnectDB,
};
