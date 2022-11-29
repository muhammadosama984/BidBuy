import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { apiRoute, apiProtected } from "./routes/api.js";
import AuthMiddleware from "./middleware/Authentication.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(
  "mongodb+srv://osama:osama123@cluster0.xwgpbcb.mongodb.net/bid?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (e) => console.log(e)
);

app.use(cors());
app.use(express.json());
app.use("/api/", apiRoute);
app.use("/api/", AuthMiddleware, apiProtected);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
