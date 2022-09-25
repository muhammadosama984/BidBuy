const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");

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
