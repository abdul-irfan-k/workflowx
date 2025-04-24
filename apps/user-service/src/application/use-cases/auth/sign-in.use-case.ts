import { ISigninUseCase } from '@application/interfaces/use-cases/auth';
import { HttpStatusCode } from '@constants';
import { IUserEntity } from '@domain/entities';
import { UserRepository } from '@infrastructure/database/repositories';
import { HttpError } from '@infrastructure/http/error';
import { IPasswordService } from '@infrastructure/interfaces/services/password-service/IPasswordService';

export class SignInUseCase implements ISigninUseCase {
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
      throw new HttpError({
        message: '',
        statusCode: HttpStatusCode.BAD_REQUEST,
      });
    }

    if (!data.email && !data.userName) {
      throw new HttpError({
        message: 'Please provide email or username',
        statusCode: HttpStatusCode.BAD_REQUEST,
      });
    }

    const user = await this.userRepository.findOne({ email: data.email });

    if (!user) {
      throw new HttpError({
        statusCode: HttpStatusCode.NOT_FOUND,
        message: 'User not found',
      });
    }

    const isValidPassword = await this.passwordService.verifyPassword(
      data.password,
      user.password,
    );
    if (!isValidPassword)
      throw new HttpError({
        statusCode: HttpStatusCode.UNAUTHORIZED,
        message: 'Invalid password',
      });

    return user;
  }
}
