import { ISignupUseCase } from '@application/interfaces/use-cases/ISignupUseCase';
import { ICookieService } from '@infrastructure/interfaces/services/cookie-service/ICookieService';
import { IJwtAuthService } from '@infrastructure/interfaces/services/jwt-auth-service/IJWTAuthService';
import { NextFunction, Request, Response } from 'express';
import { IUserEntity } from '@domain/entities'; // Import IUserEntity

export class SignUpController {
  private signUpUseCase: ISignupUseCase;
  private tokenService: IJwtAuthService;
  private cookieService: ICookieService;

  constructor(
    signUpUseCase: ISignupUseCase,
    tokenService: IJwtAuthService,
    cookieService: ICookieService,
  ) {
    this.signUpUseCase = signUpUseCase;
    this.tokenService = tokenService;
    this.cookieService = cookieService;
  }

  async handle(req: Request, res: Response, _next: NextFunction) {
    try {
      //eslint-disable-next-line
      //@ts-ignore
      const userData: Omit<IUserEntity, 'id' | 'createdAt' | 'updatedAt'> = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password,
      };

      const user = await this.signUpUseCase.execute(userData as IUserEntity);

      const accessToken = this.tokenService.generateAccessToken({
        userId: user.id,
        email: user.email,
      });

      this.cookieService.setCookie(res, 'accessToken', accessToken, {
        httpOnly: true,
      });

      const responseData = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userName: user.userName,
      };
      res.status(201).json({
        message: 'User created successfully',
        success: true,
        data: {
          user: responseData,
        },
      });
    } catch (error) {
      console.error('Signup Error:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'An unexpected error occurred';
      res.status(400).json({
        message: `Signup failed: ${errorMessage}`,
        success: false,
      });
    }
  }
}
