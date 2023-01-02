const Syllabus = require("../models/Syllabus");
const Student = require("../models/Student");
const asyncHandler = require("express-async-handler");
const { json } = require("express");

const addSyllabus = asyncHandler(async (req, res) => {
  const syllabus = await Syllabus.create(req.body);
  if (syllabus) {
    res.status(200).json(syllabus);
  }
  throw new Error("Syllbus upload nahi hua :/");
});

const getSyllabusandStudent = asyncHandler(async (req, res) => {
  let rno = req.params.rno;
  rno = rno.toUpperCase();
  // console.log(rno);
  let studData;
  if (!req.params.rno || rno.length != 7) {
    res.status(400);
    throw new Error("Please Enter Correct Roll Number");
  } else {
    studData = await Student.findOne({ rollNo: rno });
  }

  // console.log(studData);

  const branch = studData.branch;

  const sem = studData.sem;

  // console.log(branch);
  // console.log(sem);

  const syllabus = await Syllabus.find({ branch: branch, sem: sem });

  // console.log(syllabus[0].branch);

  res.status(200).json({ syllabus: syllabus, studData: studData });

  // res.send(syllabus, studData.name, studData.rollNo);
});

module.exports = { getSyllabusandStudent, addSyllabus };
