import { IUserEntity } from '@domain/entities';
import { IUserMethods, IUserModel } from '../models';
import { BaseRepository } from './base.repository';

export class UserRepository extends BaseRepository<
  IUserEntity,
  {},
  IUserMethods
> {
  constructor(model: IUserModel) {
    super(model);
  }
}
