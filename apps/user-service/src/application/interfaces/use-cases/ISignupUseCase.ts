import { IUserEntity } from '@domain/entities';

export interface ISignupUseCase {
  execute: (user: IUserEntity) => Promise<IUserEntity>;
}
