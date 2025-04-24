export interface IUserEntity {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  phone: string;
  isDeleted: boolean;

  createdAt: Date;
  updatedAt: Date;
}
