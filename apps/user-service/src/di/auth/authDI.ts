import { SignInController, SignUpController } from '@adapters/controllers/auth';
import { SigninUseCase, SignupUseCase } from '@application/use-cases/auth';
import { UserModel } from '@infrastructure/database/models';
import { UserRepository } from '@infrastructure/database/repositories/userRepository';
import { CookieService } from '@infrastructure/services/cookie-service/cookieService';
import { JwtAuthService } from '@infrastructure/services/jwt-auth-service/jwtAuthService';
import { BCryptPasswordService } from '@infrastructure/services/password-service/passwordService';

export const createAuthDependencies = () => {
  // repositories
  const userRepository = new UserRepository(UserModel);

  // services
  const bcryptPasswordService = new BCryptPasswordService();
  const jwtAuthService = new JwtAuthService();
  const cookieService = new CookieService();

  // use cases
  const signUpUseCase = new SignupUseCase(
    userRepository,
    bcryptPasswordService,
  );
  const signInUseCase = new SigninUseCase(
    userRepository,
    bcryptPasswordService,
  );

  // controllers
  const signUpController = new SignUpController(
    signUpUseCase,
    jwtAuthService,
    cookieService,
  );
  const signInController = new SignInController(
    signInUseCase,
    jwtAuthService,
    cookieService,
  );

  return {
    services: {
      bcryptPasswordService,
      jwtAuthService,
      cookieService,
    },
    repositories: {
      userRepository,
    },
    useCases: {
      signUpUseCase,
      signInUseCase,
    },
    controllers: {
      signUpController,
      signInController,
    },
  };
};
