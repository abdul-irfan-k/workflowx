import { ISigninUseCase } from '@application/interfaces/use-cases/ISigninUseCase';
import { ICookieService } from '@infrastructure/interfaces/services/cookie-service/ICookieService';
import { IJwtAuthService } from '@infrastructure/interfaces/services/jwt-auth-service/IJWTAuthService';
import { NextFunction, Request, Response } from 'express';

export class SignInController {
  private signInUseCase: ISigninUseCase;
  private tokenService: IJwtAuthService;
  private cookieService: ICookieService;

  constructor(
    signInUseCase: ISigninUseCase,
    tokenService: IJwtAuthService,
    cookieService: ICookieService,
  ) {
    this.signInUseCase = signInUseCase;
    this.tokenService = tokenService;
    this.cookieService = cookieService;
  }

  async handle(req: Request, res: Response, _next: NextFunction) {
    try {
      const userData: { email: string; userName: string; password: string } = {
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password,
      };

      const user = await this.signInUseCase.execute(userData);

      const accessToken = await this.tokenService.generateAccessToken({
        userId: user.id,
        email: user.email,
      });

      this.cookieService.setCookie(res, 'accessToken', accessToken, {
        httpOnly: true,
      });

      res.status(200).json({
        message: 'User signed in successfully',
        success: true,
      });
    } catch (error) {
      res.status(400).json({
        error: error,
        success: false,
      });
    }
  }
}
