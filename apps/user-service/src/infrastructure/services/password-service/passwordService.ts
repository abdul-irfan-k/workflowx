import { IPasswordService } from '@infrastructure/interfaces/services/password-service/IPasswordService';
import bcrypt from 'bcrypt';

export class BCryptPasswordService implements IPasswordService {
  private saltRounds: number;

  constructor() {
    this.saltRounds = 10;
  }

  public async hashPassword(plainTextPassword: string): Promise<string> {
    this.validatePassword(plainTextPassword);

    return bcrypt.hash(plainTextPassword, this.saltRounds);
  }

  public async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    this.validatePassword(plainTextPassword);
    this.validatePassword(hashedPassword);

    return bcrypt.compare(plainTextPassword, hashedPassword);
  }

  private validatePassword(password: string): void {
    if (!password) {
      throw new Error('Password cannot be empty');
    }

    if (typeof password !== 'string') {
      throw new Error('Password must be a string');
    }
  }
}
