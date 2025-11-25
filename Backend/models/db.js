import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // IMPORTANT: load .env variables

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log("SOME ERROR OCCURRED");
    console.log(err);
  });
