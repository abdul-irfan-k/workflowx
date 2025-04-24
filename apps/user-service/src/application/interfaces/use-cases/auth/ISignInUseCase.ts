import { IUserEntity } from '@domain/entities';

export interface ISigninUseCase {
  execute(input: {
    email?: string;
    userName?: string;
    password: string;
  }): Promise<IUserEntity>;
}
