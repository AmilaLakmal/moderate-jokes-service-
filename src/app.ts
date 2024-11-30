import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/auth-routes";
import jokeRoutes from "./routes/joke-routes";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);
app.use("/jokes", jokeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
