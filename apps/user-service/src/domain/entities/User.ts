export interface IUserEntity {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  isDeleted: boolean;

  createdAt: Date;
  updatedAt: Date;
}
