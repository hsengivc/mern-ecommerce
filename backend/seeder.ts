import mongoose from "mongoose";
import dotenv from "dotenv";
import "colorts/lib/string";
import users from "./data/user";
import products from "./data/products";
import { User, Product, Order } from "./models";
import { connectDB } from "./config";
import { IUserDocument, IReview } from "./interfaces";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createUsers = await User.insertMany(users);

    const adminUser: IUserDocument = createUsers[0]._id;

    const sampleProducts = products.map((product) => {
      let reviews: IReview[] = [];
      return { ...product, user: adminUser, reviews };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
