import { MongoDB } from '@infrastructure/database/config/mongo-db.config';
import { ExpressServer } from '@infrastructure/server/express';
import logger from '@utils/logger';

async function bootstrap() {
  try {
    // Connect to MongoDB
    await MongoDB.connect();

    new ExpressServer().start();
  } catch (error) {
    logger.error('Failed to start the application:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGTERM', async () => {
  logger.info('SIGTERM received. Starting graceful shutdown...');
  await MongoDB.disconnect();
  process.exit(0);
});

bootstrap().catch(error => {
  logger.error('Unhandled error during bootstrap:', error);
  process.exit(1);
});
