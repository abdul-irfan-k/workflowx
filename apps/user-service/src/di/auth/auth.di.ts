import {
  SignInController,
  SignOutController,
  SignUpController,
} from '@adapters/controllers/auth';
import {
  SignInUseCase,
  SignOutUseCase,
  SignUpUseCase,
} from '@application/use-cases/auth';
import { UserModel } from '@infrastructure/database/models';
import { UserRepository } from '@infrastructure/database/repositories';
import { CookieService } from '@infrastructure/services/cookie-service/cookie.service';
import { JwtAuthService } from '@infrastructure/services/jwt-auth-service/jwt-auth.service';
import { BCryptPasswordService } from '@infrastructure/services/password-service/password.service';

export const createAuthDependencies = () => {
  // repositories
  const userRepository = new UserRepository(UserModel);

  // services
  const bcryptPasswordService = new BCryptPasswordService();
  const jwtAuthService = new JwtAuthService();
  const cookieService = new CookieService();

  // use cases
  const signUpUseCase = new SignUpUseCase(
    userRepository,
    bcryptPasswordService,
  );
  const signInUseCase = new SignInUseCase(
    userRepository,
    bcryptPasswordService,
  );
  const signOutUseCase = new SignOutUseCase();

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
  const signOutController = new SignOutController(
    signOutUseCase,
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
      signOutUseCase,
    },
    controllers: {
      signUpController,
      signInController,
      signOutController,
    },
  };
};
