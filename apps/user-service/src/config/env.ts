import { z } from 'zod';
import dotenv from 'dotenv';
dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.coerce.string(),
  JWT_ACCESS_TOKEN_SECRET: z.coerce.string(),
  JWT_REFRESH_TOKEN_SECRET: z.coerce.string(),
  JWT_ACCESS_TOKEN_EXPIRES_IN: z.coerce.string().default('1h'),
  JWT_REFRESH_TOKEN_EXPIRES_IN: z.coerce.string().default('30d'),
});

const env = envSchema.parse(process.env);
export const {
  NODE_ENV,
  PORT,
  DATABASE_URL,
  JWT_ACCESS_TOKEN_EXPIRES_IN,
  JWT_ACCESS_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_EXPIRES_IN,
  JWT_REFRESH_TOKEN_SECRET,
} = env;
