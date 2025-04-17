import { ISigninUseCase } from '@application/interfaces/use-cases/ISigninUseCase';
import { IUserEntity } from '@domain/entities';
import { UserRepository } from '@infrastructure/database/repositories/userRepository';
import { IPasswordService } from '@infrastructure/interfaces/services/password-service/IPasswordService';

export class SigninUseCase implements ISigninUseCase {
  private userRepository: UserRepository;
  private passwordService: IPasswordService;

  constructor(
    userRepository: UserRepository,
    passwordService: IPasswordService,
  ) {
    this.userRepository = userRepository;
    this.passwordService = passwordService;
  }

  async execute(data: {
    email?: string;
    userName?: string;
    password: string;
  }): Promise<IUserEntity> {
    if (!data.password) {
      throw new Error('Password is required');
    }

    if (!data.email && !data.userName) {
      throw new Error('Email or username must be provided');
    }

    const user = await this.userRepository.findOne({ email: data.email });

    if (!user) {
      throw new Error('User not found');
    }

    const isVaildPassword = await this.passwordService.verifyPassword(
      data.password,
      user.password,
    );
    if (!isVaildPassword) throw new Error('Please provide valid password');

    return user;
  }
}
