export interface ISignOutUseCaseInput {}

export interface ISignOutUseCaseOutput {
  success: boolean;
  message: string;
}

export interface ISignOutUseCase {
  execute(input: ISignOutUseCaseInput): Promise<ISignOutUseCaseOutput>;
}
