import { ICustomError } from './interfaces/CustomError';

export class BadRequestError extends Error implements ICustomError {
  message: string;
  errors: Array<{ message: string; context?: Record<string, string> }>;
  statusCode: number;
  logging: boolean;

  constructor(params: {
    message?: string;
    errors?: Array<{ message: string; context?: Record<string, string> }>;
    statusCode?: number;
    logging?: boolean;
  }) {
    super(params.message || 'Bad Request');
    this.message = params.message || 'Bad Request';
    this.errors = params.errors || [{ message: this.message }];
    this.statusCode = params.statusCode || 400;
    this.logging = params.logging || false;

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
