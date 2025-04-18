import { ICookieService } from '@infrastructure/interfaces/services/cookie-service/ICookieService';
import { Response, Request, CookieOptions } from 'express';

export class CookieService implements ICookieService {
  setCookie(
    res: Response,
    name: string,
    cookie: string,
    options: CookieOptions,
  ): void {
    res.cookie(name, cookie, options);
  }

  getCookie(req: Request, name: string): string | undefined {
    return req.cookies[name];
  }

  removeCookie(res: Response, name: string, options?: CookieOptions): void {
    res.clearCookie(name, options);
  }

  removeAllCookies(res: Response): void {
    const cookies = res.req.cookies;
    if (cookies) {
      for (const name in cookies) {
        res.clearCookie(name);
      }
    }
  }
}
