import express, { Router } from 'express';
import { signInUserSchema, signUpUserSchema } from '@adapters/validators';
import { dependencies } from '@di/index';
import { schemaValidator } from '../middleware/schema.validator';

export class AuthRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
    this.configureRoutes();
  }

  configureRoutes(): void {
    this.router.post(
      '/signup',
      schemaValidator(signUpUserSchema),
      dependencies.auth.controllers.signUpController.handle,
    );

    this.router.post(
      '/signin',
      schemaValidator(signInUserSchema),
      dependencies.auth.controllers.signInController.handle,
    );
  }

  getRoutes(): express.Router {
    return this.router;
  }
}
