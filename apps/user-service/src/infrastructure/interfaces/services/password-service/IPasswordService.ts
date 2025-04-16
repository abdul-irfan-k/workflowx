export interface IPasswordService {
  /**
   * Hashing a plain text password
   * @param plainTextPassword The plain text password to hash
   * @returns A that resolves with the hashed password string
   * @throws (Error) if hashing fails
   */
  hashPassword(plainTextPassword: string): Promise<string>;

  /**
   * Compares a plain text password against a hashed password.
   * @param plainText The plain text password to verify.
   * @param hashedPassword The stored password hash to compare against.
   * @returns A promise resolves with true if password matches the hash or false otherwise.
   * @throws {Error} If comparison fails.
   */
  verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
