import "dotenv/config";

import express from "express";
import { connectDB } from "./db/config.js";
import allRoutes from "./routes/index.js";

connectDB();

const app = express();

app.use(express.json());

app.use(allRoutes);

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
