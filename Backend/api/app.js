import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import paymentRoute from "./routes/router.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", paymentRoute);

const port = 5000;

app.get("/api/getkey", (req, res) => {
  res.status(200).json({
    key: process.env.RAZORPAY_API_KEY,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
