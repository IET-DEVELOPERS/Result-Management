const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
connectDB();
const port = 5050;
const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("result management");
});

app.listen(port, () => {
  console.log(`server fired on port but you are asshole ${port}`);
});
