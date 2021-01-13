import { Document, Model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

export interface IUserDocument extends IUser, Document {
  matchPassword: any;
}
export interface UserModel extends Model<IUserDocument> {}
