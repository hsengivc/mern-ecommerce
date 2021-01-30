import { Document, Model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

export interface UserDocument extends IUser, Document {
  matchPassword: (enteredPassword: string) => Promise<Boolean>;
}
export interface UserModel extends Model<UserDocument> {}
