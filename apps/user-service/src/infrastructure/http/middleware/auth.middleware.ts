import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '@constants';
import { IJwtAuthService } from '@infrastructure/interfaces/services/jwt-auth-service/IJWTAuthService';
import { JWT_ACCESS_TOKEN_SECRET } from '@config/env';
import logger from '@utils/logger';
import { HttpError } from '../error';

interface IJwtPayload {
  id: string;
  email: string;
}

export const authMiddleware = (jwtAuthService: IJwtAuthService) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        throw new HttpError({
          message: 'Authorization header is missing',
          statusCode: HttpStatusCode.UNAUTHORIZED,
        });
      }

      if (!authHeader.startsWith('Bearer ')) {
        throw new HttpError({
          message: 'Invalid authorization format',
          statusCode: HttpStatusCode.UNAUTHORIZED,
        });
      }

      const token = authHeader.split(' ')[1];

      const payload = jwtAuthService.verifyToken(
        token,
        JWT_ACCESS_TOKEN_SECRET,
      ) as IJwtPayload;

      if (!payload) {
        throw new HttpError({
          message: 'Invalid token',
          statusCode: HttpStatusCode.UNAUTHORIZED,
        });
      }

      req.user = {
        id: payload.id,
        email: payload.email,
      };

      next();
    } catch (error) {
      logger.error('Auth middleware error:', error);
      next(error);
    }
  };
};
