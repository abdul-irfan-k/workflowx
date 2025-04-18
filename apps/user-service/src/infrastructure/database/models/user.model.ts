import { IUserEntity } from '@domain/entities';
import { comparePassword, hashPassword } from '@utils/bcrypt';
import { Model, model, Schema } from 'mongoose';

export interface IUserMethods {
  getFullName(): string;
}

export interface IUserDocument extends IUserEntity, Document, IUserMethods {}
export interface IUserModel extends Model<IUserEntity, {}, IUserMethods> {}

const userSchema = new Schema<IUserDocument, {}, IUserMethods>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    phone: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

userSchema.methods.getFullName = function (): string {
  return `${this.firstName} ${this.lastName}`;
};

export const UserModel = model<IUserDocument, IUserModel>('User', userSchema);
