import { IUserEntity } from '@domain/entities';
import { IUserMethods, IUserModel } from '../models';
import { BaseRepository } from './baseRepository';

export class UserRepository extends BaseRepository<
  IUserEntity,
  {},
  IUserMethods
> {
  constructor(model: IUserModel) {
    super(model);
  }
}
