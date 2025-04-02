import { UserModel } from '../models';
import { UserRepository } from './userRepository';

export const userRepository = new UserRepository(UserModel);
