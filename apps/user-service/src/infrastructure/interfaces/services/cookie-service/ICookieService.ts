import { NextFunction, Response, Request, CookieOptions } from 'express';

export interface ICookieService {
  setCookie(
    res: Response,
    name: string,
    cookie: string,
    options: CookieOptions,
  ): void;
  getCookie(req: Request, name: string): string | undefined;
  removeCookie(res: Response, name: string, options?: CookieOptions): void;
  removeAllCookies(res: Response): void;
}
