import {
  JWT_ACCESS_TOKEN_EXPIRES_IN,
  JWT_ACCESS_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_EXPIRES_IN,
  JWT_REFRESH_TOKEN_SECRET,
} from '@config/env';
import { HttpStatusCode } from '@constants';
import { HttpError } from '@infrastructure/http/error';
import { IJwtAuthService } from '@infrastructure/interfaces/services/jwt-auth-service/IJWTAuthService';
import jwt, {
  Jwt,
  JwtPayload,
  PrivateKey,
  Secret,
  SignOptions,
} from 'jsonwebtoken';

export class JwtAuthService implements IJwtAuthService {
  generateToken(
    payload: string | Buffer | object,
    secret: Secret | PrivateKey,
    options?: SignOptions,
  ): string {
    try {
      return jwt.sign(payload, secret, options);
    } catch (error) {
      throw new HttpError({
        message: 'Failed to generate token',
        statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
      });
    }
  }

  verifyToken(token: string, secret: Secret): Jwt | JwtPayload | string {
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      throw new HttpError({
        message: 'Invalid token',
        statusCode: HttpStatusCode.UNAUTHORIZED,
      });
    }
  }

  generateAccessToken(payload: string | Buffer | object): string {
    return this.generateToken(payload, JWT_ACCESS_TOKEN_SECRET, {
      //eslint-disable-next-line
      //@ts-ignore
      expiresIn: JWT_ACCESS_TOKEN_EXPIRES_IN,
    });
  }

  generateRefreshToken(payload: string | Buffer | object): string {
    return this.generateToken(payload, JWT_REFRESH_TOKEN_SECRET, {
      //eslint-disable-next-line
      //@ts-ignore
      expiresIn: JWT_REFRESH_TOKEN_EXPIRES_IN,
    });
  }
}
