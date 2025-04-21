import { BaseHttpError } from './base-http-error';

export class BadRequestError extends BaseHttpError {
  constructor(params: {
    message?: string;
    errors?: Array<{ message: string; context?: Record<string, string> }>;
    statusCode?: number;
    logging?: boolean;
  }) {
    super({
      message: params.message || 'Bad Request',
      statusCode: params.statusCode || 400,
      errors: params.errors || [{ message: params.message || 'Bad Request' }],
      logging: params.logging,
    });
  }
}
