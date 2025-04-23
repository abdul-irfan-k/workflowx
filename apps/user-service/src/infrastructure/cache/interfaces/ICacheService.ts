export interface ICacheService {
  /**
   * Retrieves data from the cache using a key.
   * @param key The unique key for the cached item.
   * @returns A cached data or null if not found.
   */
  get<T>(key: string): Promise<T | null>;

  /**
   * Save data in the cache with an optional Time-To-Live (TTL).
   * @param key The unique key to store the data.
   * @param value The data to store (must be serializable).
   * @param ttlSeconds Optional time in seconds to keep the data.
   * @returns A promise that resolves when the data has been set.
   */
  set<T>(key: string, value: T, ttlSeconds?: number): Promise<void>;

  /**
   * Removes data from the cache using a key.
   * @param key The unique key of the data to delete.
   * @returns A promise that resolves when the data has been removed.
   */
  delete(key: string): Promise<void>;
}
