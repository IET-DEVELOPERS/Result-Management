const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const connectDB = require("./config/db");
connectDB();

const adminRoutes = require("./routes/adminRoutes");
const studentRoutes = require("./routes/studentRoutes");
const syllabusRoutes = require("./routes/syllabusRoutes");
const resultRoutes = require("./routes/resultRoutes");

const port = process.env.PORT;
const bp = require("body-parser");
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/syllabus", syllabusRoutes);
app.use("/api/result", resultRoutes);

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "/frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(port, () => {
  console.log(`server fired on port ${port}`);
});
