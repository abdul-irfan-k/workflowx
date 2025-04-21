import { NextFunction, Request, Response } from 'express';
import logger from '@utils/logger';
import { BaseHttpError } from '../error/base-http-error';

/**
 * Error handler middleware for Express.js.
 *
 * @param error - The error object.
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The next function in the middleware chain.
 */
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof BaseHttpError) {
    const { errors, logging, message, name, statusCode } = error;
    if (logging) {
      logger.error(`${name}: ${message}`);
    }

    return res.status(statusCode).json({
      code: statusCode,
      message: message,
      errors,
    });
  }

  logger.error(`Internal Server Error: ${error.message}`);
  return res.status(500).json({
    code: 500,
    message: 'Internal Server Error',
    status: 'error',
  });
};
