import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import doctorRoute from "./routes/doctor.js";
import reviewRoute from "./routes/review.js";

const app = express();
const port = 4000;


// Increase payload size limit
app.use(cors())
app.use(express.json({ limit: '10mb' })); // Adjust the limit as needed
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Connect to the database (MongoDB)
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {});
    console.log("Mongoose connection established");
  } catch (err) {
    console.error("Mongoose connection error:", err);
  }
};

// Middlewares
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
  console.log(`The server is running on http://localhost:${port}`);
});
