import {
  ISignOutUseCase,
  ISignOutUseCaseInput,
  ISignOutUseCaseOutput,
} from '@application/interfaces/use-cases/auth';

export class SignOutUseCase implements ISignOutUseCase {
  constructor() {}

  async execute(_input: ISignOutUseCaseInput): Promise<ISignOutUseCaseOutput> {
    return {
      success: true,
      message: 'User signed out successfully.',
    };
  }
}
