import { IUserEntity } from '@domain/entities';
import { hashPassword } from '@utils/bcrypt';
import { Model, model, Schema } from 'mongoose';

export type IUserModel = Model<IUserEntity, {}, IUserMethods>;

export interface IUserMethods {
  fullName(): string;
}

const userSchema = new Schema<IUserEntity, IUserModel, IUserMethods>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    phone: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

userSchema.method('fullName', function getFullName() {
  return this.firstName + ' ' + this.lastName;
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hashPassword(this.password);
  }
  next();
});

export const UserModel = model<IUserEntity, IUserModel>('User', userSchema);
