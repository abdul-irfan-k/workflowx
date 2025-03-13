import express from 'express';
import logger from '../../../utils/logger';

const router = express.Router();

router.post('/', (req, res) => {
  logger.info('GET /api/v1/users/');

  logger.info('Request body: ', req.body);
  res.json({ message: 'user route' });
});

export default router;
