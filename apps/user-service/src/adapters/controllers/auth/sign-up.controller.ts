import { ISignupUseCase } from '@application/interfaces/use-cases/ISignupUseCase';
import { ICookieService } from '@infrastructure/interfaces/services/cookie-service/ICookieService';
import { IJwtAuthService } from '@infrastructure/interfaces/services/jwt-auth-service/IJWTAuthService';
import { NextFunction, Request, Response } from 'express';
import { IUserEntity } from '@domain/entities'; // Import IUserEntity
import { HttpStatusCode } from '@constants';

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

  async handle(req: Request, res: Response, next: NextFunction) {
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
        id: user._id,
        email: user.email,
      });

      this.cookieService.setCookie(res, 'accessToken', accessToken, {
        httpOnly: true,
      });

      const responseData = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userName: user.userName,
      };
      res.status(HttpStatusCode.CREATED).json({
        message: 'User created successfully',
        success: true,
        data: {
          user: responseData,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
