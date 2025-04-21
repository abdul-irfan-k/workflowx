export interface ICustomError {
  message: string;
  statusCode: number;
  errors:
    | Array<{ message: string; context?: Record<string, string> }>
    | undefined;
  logging?: boolean;
}
