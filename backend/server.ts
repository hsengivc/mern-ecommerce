import express from "express";
import dotenv from "dotenv";
import "colorts/lib/string";

import { connectDB } from "./config";
import { productRoutes } from "./routes";

const app = express();
dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan
  )
);
