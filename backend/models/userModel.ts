import { Schema, model, Document } from "mongoose";
import { IUserDocument } from "../interfaces";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: String,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (
  this: IUserDocument,
  enteredPassword: string
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const User = model<IUserDocument>("User", userSchema);
