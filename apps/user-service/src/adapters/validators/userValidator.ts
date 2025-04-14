import { IUserEntity } from '@domain/entities';
import { z } from 'zod';

export type UserSignUpFields = Pick<
  IUserEntity,
  'firstName' | 'lastName' | 'email' | 'username' | 'password'
>;

export const signUpUserSchema: z.ZodType<UserSignUpFields> = z.object({
  firstName: z.string().trim().min(2, 'First Name cannot be empty'),
  lastName: z.string().trim().min(2, 'Last Name cannot be empty'),
  email: z
    .string()
    .email('Invalid email address')
    .min(1, 'Email cannot be empty'),
  username: z.string().trim().min(2, 'Username cannot be empty'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  phone: z.string().optional(),
});

type UserSignInFields = Pick<IUserEntity, 'email' | 'password'>;

export const signInUserSchema: z.ZodType<UserSignInFields> = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .min(1, 'Email cannot be empty'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});
