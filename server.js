import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import studentRoute from "./routes/studentRoutes.js"; 

import dns from "dns";
dns.setServers(['8.8.8.8', '1.1.1.1']);
dotenv.config();

const atlas_string = process.env.MONGO_URI;

mongoose.connect(atlas_string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const app = express();
app.use(express.json());

app.use("/api/students", studentRoute);

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});