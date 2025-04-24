import { ISignOutUseCase } from '@application/interfaces/use-cases/auth';
import { HttpStatusCode } from '@constants';
import { HttpError } from '@infrastructure/http/error';
import { ICookieService } from '@infrastructure/interfaces/services/cookie-service/ICookieService';
import { NextFunction, Request, Response } from 'express';

export class SignOutController {
  private signOutUseCase: ISignOutUseCase;
  private cookieService: ICookieService;

  constructor(signOutUseCase: ISignOutUseCase, cookieService: ICookieService) {
    this.signOutUseCase = signOutUseCase;
    this.cookieService = cookieService;
  }

  async handle(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.signOutUseCase.execute({});
      if (!result.success) {
        throw new HttpError({
          statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
          message: result.message,
        });
      }

      this.cookieService.removeCookie(res, 'accessToken');

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
