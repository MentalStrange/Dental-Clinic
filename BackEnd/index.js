import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
const port = 4000;
import process from "process";
import "dotenv/config";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import doctorRoute from "./routes/doctor.js";
import reviewRoute from "./routes/review.js";

const app = express();
// const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
};

// connect to database (mongodb);
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongoose connection  established");
  } catch (err) {
    console.log("Mongoose connection error");
  }
};

// middlewares

// app.use( );
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Express!");
});

app.listen(port, () => {
  connectDB();
  console.log(`the server run on http://localhost:${port}`);
});
