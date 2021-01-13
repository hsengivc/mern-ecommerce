import { Schema, model, Document } from "mongoose";
import { UserDocument } from "../types";
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
  this: UserDocument,
  enteredPassword: string
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (this: UserDocument, next) {
  if (!this.isModified("password")) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export const User = model<UserDocument>("User", userSchema);
