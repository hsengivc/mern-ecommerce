import express from "express";
import dotenv from "dotenv";
import "colorts/lib/string";

import { connectDB } from "./config";
import { productRoutes, userRoutes, orderRoutes } from "./routes";
import { errorHandler, notFound } from "./middleware";

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan
  )
);
