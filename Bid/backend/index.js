const express = require('express');
const mongoose = require('mongoose');

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true }, (e) => console.log(e));

app.listen(PORT, ()=>{
    console.log("Server is running")
})



