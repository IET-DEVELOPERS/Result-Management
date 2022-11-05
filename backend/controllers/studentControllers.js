const Student = require("../models/Student");
const Result = require("../models/Result");
const asyncHandler = require("express-async-handler");

const viewResult = asyncHandler(async (req, res) => {
  const rollNo = req.params.rollNo;

  if (!req.params.rollNo || rollNo.length != 7) {
    res.status(400);
    throw new Error("Please Enter Correct Roll Number");
  } else {
    const studData = await Student.findOne({ rollNo: rollNo });

    // console.log(studData);

    res.status(200).json({
      name: studData.name,
      rollNo: studData.rollNo,
      enrlNo: studData.enrlNo,
      email: studData.email,
      sem: studData.sem,
      branch: studData.branch,
    });
  }
});

const allStudents = asyncHandler(async (req, res) => {
  const sem = req.query.sem;
  const branch = req.query.branch;
  const studData = await Student.find({ sem: sem, branch: branch });

  // console.log(studData);

  res.send(studData);
});

const addStudent = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const rollNo = req.body.rollNo;
  const enrlNo = req.body.enrlNo;
  const email = req.body.email;
  const sem = req.body.sem;
  const branch = req.body.branch;

  if (!name || !email || !rollNo || !enrlNo || !sem || !branch) {
    res.status(400);
    throw new Error("Please Enter all the fields");
  } else {
    const studExists = await Student.findOne({ rollNo: rollNo });
    if (studExists) {
      res.status(400);
      throw new Error("Student already exists");
    } else {
      const student = await Student.create({
        name,
        email,
        rollNo,
        enrlNo,
        sem,
        branch,
      });

      if (student) {
        res.status(201).json(student);
      } else {
        res.status(400);
        throw new Error("Couldn't Create Student");
      }
    }
  }
});

module.exports = { viewResult, addStudent, allStudents };
