import bcrypt from "bcryptjs";
import { IUser } from "../interfaces";

const users: IUser[] = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "John Snow",
    email: "john@snow.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Lannister",
    email: "lwan@lannister.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
