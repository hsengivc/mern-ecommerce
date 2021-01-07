import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "John Snow",
    email: "admin@admin.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Lannister",
    email: "admin@admin.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
