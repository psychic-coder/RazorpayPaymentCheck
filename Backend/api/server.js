import app from "./app.js"
import Razorpay from "razorpay"
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();


 const connectDB = async () => {
  const { connection } = await mongoose.connect("mongodb://localhost:27017");
  console.log(`Mongodb is connected with ${connection.host}`);
};
connectDB();

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });


  export {instance}



