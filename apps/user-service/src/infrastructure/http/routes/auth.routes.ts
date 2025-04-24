import express, { Router } from 'express';
import { signInUserSchema, signUpUserSchema } from '@adapters/validators';
import { dependencies } from '@di/index';
import { schemaValidator } from '../middleware';

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
      (req, res, next) =>
        dependencies.auth.controllers.signUpController.handle(req, res, next),
    );

    this.router.post(
      '/signin',
      schemaValidator(signInUserSchema),
      (req, res, next) =>
        dependencies.auth.controllers.signInController.handle(req, res, next),
    );

    this.router.post('/signout', (req, res, next) =>
      dependencies.auth.controllers.signOutController.handle(req, res, next),
    );
  }

  getRoutes(): express.Router {
    return this.router;
  }
}
