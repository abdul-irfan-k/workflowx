import express, { Router } from 'express';
import { signInUserSchema, signUpUserSchema } from '@adapters/validators';
import { schemaValidator } from '../middleware/schemaValidator';

export class AuthRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
    this.configureRoutes();
  }

  configureRoutes(): void {
    this.router.post('/signup', schemaValidator(signUpUserSchema));

    this.router.post('/signin', schemaValidator(signInUserSchema));
  }

  getRoutes(): express.Router {
    return this.router;
  }
}
