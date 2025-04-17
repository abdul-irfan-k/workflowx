import express from 'express';
import { signInUserSchema, signUpUserSchema } from 'adapters/validators';
import { schemaValidator } from '../middleware/schemaValidator';

export class AuthRoutes {
  static getRoutes(): express.Router {
    const router = express.Router();

    router.post('/signup', schemaValidator(signUpUserSchema));

    router.post('/signin', schemaValidator(signInUserSchema));

    return router;
  }
}
