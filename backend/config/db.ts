import mongoose from "mongoose";
import "colorts/lib/string";

export const connectDB = async () => {
  try {
    const URI = process.env.MONGO_URI;

    if (!URI) throw new Error("MONGO_URI not found.");

    const conn = await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.green);
  } catch (error) {
    console.error(`Error: ${error.message}`.red);
    process.exit(1);
  }
};
