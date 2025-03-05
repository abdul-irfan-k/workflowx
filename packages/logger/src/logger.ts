import winston, { transports, format, LoggerOptions } from 'winston';

interface LoggerOption {
  env: string;
}

export function createLogger(options?: LoggerOption): winston.Logger {
  const env = options?.env || 'development';
  const isProduction = env === 'production';

  const loggerTransports: LoggerOptions['transports'] = [
    new transports.Console(),
  ];

  if (isProduction) {
    loggerTransports.push(
      new transports.File({
        filename: 'error.log',
        level: 'error',
      }),
      new transports.File({
        filename: 'combined.log',
      }),
    );
  }

  const logger = winston.createLogger({
    level: isProduction ? 'info' : 'debug',
    format: format.json(),
    transports: loggerTransports,
  });

  return logger;
}
