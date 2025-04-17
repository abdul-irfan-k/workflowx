import { ISignupUseCase } from '@application/interfaces/use-cases/ISignupUseCase';
import { IUserEntity } from '@domain/entities';
import { UserRepository } from '@infrastructure/database/repositories/userRepository';
import { IPasswordService } from '@infrastructure/interfaces/services/password-service/IPasswordService';

export class SignupUseCase implements ISignupUseCase {
  private userRepository: UserRepository;
  private passwordService: IPasswordService;

  constructor(
    userRepository: UserRepository,
    passwordService: IPasswordService,
  ) {
    this.userRepository = userRepository;
    this.passwordService = passwordService;
  }

  async execute(data: IUserEntity): Promise<IUserEntity> {
    const existingUser = await this.userRepository.findOne({
      email: data.email,
      userName: data.userName,
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await this.passwordService.hashPassword(
      data.password,
    );

    const newUserPayload: IUserEntity = {
      ...data,
      password: hashedPassword,
    };

    const newUser = await this.userRepository.create(newUserPayload);
    return newUser;
  }
}
