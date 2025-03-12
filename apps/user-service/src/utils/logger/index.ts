import { createLogger } from '@workflowx/logger';
import dotenv from 'dotenv';
import { NODE_ENV } from '../../config/env';

dotenv.config();

const logger = createLogger({ env: NODE_ENV });
export default logger;
