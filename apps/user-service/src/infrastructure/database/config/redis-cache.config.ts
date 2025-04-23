import Redis, { Redis as RedisInstance } from 'ioredis';

export class RedisClient {
  private redis!: RedisInstance;
  private connectionUrl: string;

  /**
   * Creates an instance of RedisClient.
   * @param url - The Redis connection URL in the format.
   *    redis://:password@hostname:port/db-number
   */
  constructor(url: string) {
    this.connectionUrl = url;
  }

  /**
   * Connects to the Redis service using the provided connection URL.
   * @returns a promise that resolves when connection is established
   */
  async connect() {
    this.redis = new Redis(this.connectionUrl);
    await this.redis.connect();
  }

  /**
   * Get the Redis client instance.
   * @returns the Redis client instance
   */

  get client(): RedisInstance {
    if (!this.redis) {
      throw new Error('Redis client is not connected');
    }
    return this.redis;
  }

  /**
   * Close the Redis connection.
   * @returns a promise that resolves when the connection is closed
   */
  async disconnect() {
    await this.redis.quit();
  }
}
