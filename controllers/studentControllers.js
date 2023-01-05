const Student = require("../models/Student");
const Result = require("../models/Result");
const asyncHandler = require("express-async-handler");
const puppeteer = require("puppeteer");
const fs = require("fs");
const mailer = require("nodemailer");
const doc = require("../pdf-generation/templete");

// const getStudent = asyncHandler(async (req, res) => {

// });

const savepdf = asyncHandler(async (req, res) => {
  let s1 = req.body.s1;
  let s2 = req.body.s2;
  let s3 = req.body.s3;
  let s4 = req.body.s4;
  let s5 = req.body.s5;
  let s6 = req.body.s6;
  let s7 = req.body.s7;
  let s8 = req.body.s8;
  let cgpa = req.body.cgpa;
  let name = req.body.name;
  let rno = req.body.rno;
  let enrno = req.body.enrno;
  let sem = req.body.sem;
  let branch = req.body.branch;
  let status = req.body.status;
  let email = req.body.email;

  console.log(email);

  rno = rno.toUpperCase();

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.setContent(
    doc(
      s1,
      s2,
      s3,
      s4,
      s5,
      s6,
      s7,
      s8,
      cgpa,
      status,
      branch,
      sem,
      rno,
      enrno,
      name
    )
  );
  // await page.emulateMedia("screen");
  await page.pdf({
    path: `${rno}.pdf`,
    format: "A4",
    // printBackground: "true",
  });

  //mailing

  let mailTransport = mailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAILID,
      pass: process.env.MAILPASS,
    },
  });

  let details = {
    from: process.env.MAILID,
    to: email,
    subject: `${sem}th Sem Result`,
    text: "You Result ",
    attachments: [
      {
        path: `${rno}.pdf`,
      },
    ],
  };

  mailTransport.sendMail(details, (err) => {
    if (err) {
      console.log(err);
    }
  });

  function del() {
    fs.unlinkSync(`${rno}.pdf`);
    // console.log("deleted");
  }

  setTimeout(del, 2000);

  // console.log("done");
  await browser.close();
});

const viewResult = asyncHandler(async (req, res) => {
  let rollNo = req.body.rollNo;
  rollNo = rollNo.toUpperCase();
  console.log(rollNo);

  if (!req.body.rollNo || rollNo.length != 7) {
    res.status(400);
    throw new Error("Please Enter Correct Roll Number");
  } else {
    const studData = await Student.findOne({ rollNo: rollNo });
    const resData = await Result.findOne({ studRollNo: rollNo }).select(
      "-studRollNo"
    );

    if (!studData || !resData) {
      res.status(400);
      throw new Error("User do not exist");
    }

    // delete resData.studRollNo;

    // console.log("result sent");

    res.status(200).json({
      name: studData.name,
      rollNo: studData.rollNo,
      enrlNo: studData.enrlNo,
      sem: studData.sem,
      email: studData.email,
      branch: studData.branch,
      resData: resData,
      StudentCGPA: resData.CGPA,
    });
  }
});

const viewAllResult = asyncHandler(async (req, res) => {
  let rollNo = req.body.rollNo;
  rollNo = rollNo.toUpperCase();

  if (!req.body.rollNo || rollNo.length != 7) {
    res.status(400);
    throw new Error("Please Enter Correct Roll Number");
  } else {
    const studData = await Student.findOne({ enrlNo: rollNo });
    const resData = await Result.findOne({ studRollNo: rollNo }).select(
      "-studRollNo"
    );

    if (!studData || !resData) {
      res.status(400);
      throw new Error("User do not exist");
    }

    // delete resData.studRollNo;

    // console.log("result sent");

    res.status(200).json({
      name: studData.name,
      rollNo: studData.rollNo,
      enrlNo: studData.enrlNo,
      sem: studData.sem,
      email: studData.email,
      branch: studData.branch,
      resData: resData,
      StudentCGPA: resData.CGPA,
    });
  }
});

const allStudents = asyncHandler(async (req, res) => {
  console.log(req.query);
  const sem = req.query.sem;
  const branch = req.query.branch;
  const studData = await Student.find({ sem: sem, branch: branch }).sort({
    rollNo: 1,
  });

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

module.exports = {
  viewResult,
  viewAllResult,
  addStudent,
  allStudents,
  savepdf,
};
