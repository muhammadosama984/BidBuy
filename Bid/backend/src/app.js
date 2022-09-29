import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";

import { apiRoute, apiProtected } from "./routes/api.js";
import AuthMiddleware from "../middleware/Authentication.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true }, (e) =>
  console.log(e)
);

app.use(cors());
app.use(express.json());
app.use("/api/", apiRoute);
//app.use("/api/", AuthMiddleware, apiProtected);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
