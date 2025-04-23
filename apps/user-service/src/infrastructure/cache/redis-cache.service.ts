import { Redis as RedisInstance } from 'ioredis';
import { ICacheService } from './interfaces/ICacheService';

export class RedisCacheService implements ICacheService {
  private redisClient: RedisInstance;

  constructor(redisClient: RedisInstance) {
    this.redisClient = redisClient;
  }

  async get<T>(key: string): Promise<T | null> {
    const data = await this.redisClient.get(key);
    if (data === null) return null;

    return JSON.parse(data) as T;
  }

  async set<T>(key: string, value: T, ttlSeconds?: number): Promise<void> {
    const serializedData = JSON.stringify(value);

    if (ttlSeconds) {
      await this.redisClient.set(key, serializedData, 'EX', ttlSeconds);
    } else {
      await this.redisClient.set(key, serializedData);
    }
  }

  async delete(key: string): Promise<void> {
    await this.redisClient.del(key);
  }
}
