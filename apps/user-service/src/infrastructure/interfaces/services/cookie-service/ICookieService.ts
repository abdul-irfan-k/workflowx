import { Response, Request, CookieOptions } from 'express';

export interface ICookieService {
  /**
   * Sets a cookie on the HTTP response.
   * @param res The Express Response object.
   * @param name The name of the cookie.
   * @param cookie The value of the cookie.
   * @param options Configuration options for the cookie.
   */
  setCookie(
    res: Response,
    name: string,
    cookie: string,
    options: CookieOptions,
  ): void;

  /**
   * Gets a cookie from the HTTP request.
   * @param req The Express Request object.
   * @param name The name of the cookie to retrieve.
   * @returns The value of the cookie if found, otherwise undefined.
   */
  getCookie(req: Request, name: string): string | undefined;

  /**
   * Removes a specific cookie from the HTTP response.
   * @param res The Express Response object.
   * @param name The name of the cookie to remove.
   * @param options Optional configuration used when setting the cookie.
   */
  removeCookie(res: Response, name: string, options?: CookieOptions): void;

  /**
   * Removes all cookies from the HTTP response.
   * @param res The Express Response object.
   */
  removeAllCookies(res: Response): void;
}
