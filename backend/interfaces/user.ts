import { Document, Model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

export interface IUserDocument extends IUser, Document {}
