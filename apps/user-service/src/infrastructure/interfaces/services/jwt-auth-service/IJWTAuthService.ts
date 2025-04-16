import { Jwt, JwtPayload, Secret } from 'jsonwebtoken';

export interface IJwtAuthService {
  /**
   * Generates a JWT Token
   * @param payload The data to include in the token.
   * @param secret The secret key used to sign the token.
   * @returns A generated JWT string.
   * @throws {Error} If token generation fails.
   */
  generateToken(payload: string | Buffer | object, secret: Secret): string;

  /**
   * Checks if a JWT token is valid
   * @param token The JWT token to verify.
   * @param secret The secret key used for verification.
   * @returns A decoded token data.
   * @throws {Error} if token is invalid.
   */
  verifyToken(token: string, secret: Secret): Jwt | JwtPayload | string;

  /**
   * Generates An access token
   * @param payload The data to include in the access token.
   * @returns An access token string.
   * @throws {Error} If access token generation fails.
   */
  generateAccessToken(payload: string | Buffer | object): string;

  /**
   * Generates a refresh token
   * @param payload The data to include in the refresh token.
   * @returns A generated refresh Token string.
   * @throws {Error} If refresh token generation fails.
   */
  generateRefreshToken(payload: string | Buffer | object): string;
}
