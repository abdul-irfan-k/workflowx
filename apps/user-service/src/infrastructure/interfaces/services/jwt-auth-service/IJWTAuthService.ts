import { Jwt, JwtPayload, Secret } from 'jsonwebtoken';

export interface IJwtAuthService {
  generateToken(payload: string | Buffer | object, secret: Secret): string;
  verifyToken(token: string, secret: Secret): Jwt | JwtPayload | string;
  generateAccessToken(payload: string | Buffer | object): string;
  generateRefreshToken(payload: string | Buffer | object): string;
}
