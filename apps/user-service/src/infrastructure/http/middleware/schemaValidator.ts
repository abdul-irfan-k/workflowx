import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, z } from 'zod';
import logger from '@utils/logger';

/**
 * Middleware to validate request body using Zod schema.
 * @param validationSchema Zod schema to validate against
 * @returns Middleware function
 */
export const schemaValidator = (
  validationSchema: z.AnyZodObject | z.ZodOptional<AnyZodObject>,
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = await validationSchema.parseAsync(req.body);
      req.body = validatedData;
      next();
    } catch (error) {
      let validationError = error;

      if (error instanceof z.ZodError) {
        validationError = error.issues.map(issue => ({
          path: issue.path[0],
          message: issue.message,
        }));

        logger.debug('Schema validation failed', {
          path: req.path,
          errors: validationError,
        });
      }

      return res.status(400).json({
        status: 'failed',
        error: validationError,
      });
    }
  };
};
