import winston, { transports, format, LoggerOptions } from 'winston';

interface LoggerOption {
  env: string;
}

/**
 * Creates a Winston logger based on the environment.
 *
 * In development, it logs everything to the console.
 * In production, it logs to the console and also saves logs to files.
 *
 * @param {LoggerOption} [options] - Optional configuration for the logger.
 * @returns {winston.Logger} A configured winston.Logger instance.
 */
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
