import { ErrorMessages, HttpStatusCode } from '@constants';
import { BaseHttpError } from './base-http-error';

export class BadRequestError extends BaseHttpError {
  constructor(params: {
    message?: string;
    errors?: Array<{ message: string; context?: Record<string, string> }>;
    statusCode?: number;
    logging?: boolean;
  }) {
    super({
      message: params.message || ErrorMessages.BAD_REQUEST,
      statusCode: params.statusCode || HttpStatusCode.BAD_REQUEST,
      errors: params.errors || [{ message: params.message || 'Bad Request' }],
      logging: params.logging,
    });
  }
}
