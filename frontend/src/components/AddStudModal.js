import React, { useState } from "react";
import "../Css/AddStudModalStyles.css";
const AddStudModal = ({ open, set }) => {
  const [name, setName] = useState("");
  const [Roll, setRoll] = useState("");
  const [Enrl, setEnrl] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [sem, setSem] = useState("");
  if (!open) {
    return null;
  }

  let cross = () => {
    set(false);
  };

  let addStudent = async () => {
    let user = localStorage.getItem("Admin");
    user = JSON.parse(user);
    let res = await fetch("http://localhost:5050/api/student/addnew", {
      method: "post",
      body: JSON.stringify({
        name: name,
        rollNo: Roll,
        email: email,
        enrlNo: Enrl,
        branch: branch,
        sem: sem,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (res.status == 400) {
      alert("wrong data");
    } else {
      res = res.json();
      alert("student added");
      set(false);
    }
  };
  return (
    <div className="overlay">
      <div className="container1">
        <h2>
          <p>Add Student</p>
          <button className="exit" onClick={cross}>
            X
          </button>
        </h2>

        <ul className="entry">
          <li>
            NAME:
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </li>
          <li>
            RollNumber:
            <input
              value={Roll}
              onChange={(e) => {
                setRoll(e.target.value);
              }}
            ></input>
          </li>
          <li>
            Enrollment-Number:
            <input
              value={Enrl}
              onChange={(e) => {
                setEnrl(e.target.value);
              }}
            ></input>
          </li>
          <li>
            Email:
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </li>
        </ul>
        <ul className="inplist2">
          <li>
            <label for="semester">Semester</label>
            <select
              name="semester"
              id="semester"
              value={sem}
              onChange={(e) => setSem(e.target.value)}
            >
              <option value="Select">Select Semester</option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
            </select>
          </li>
          <li>
            <label for="branch">Branch</label>
            <select
              name="branch"
              id="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option value="Select">Select Branch</option>
              <option value="CS">CSE</option>
              <option value="IT">IT</option>
              <option value="ETC">ETC</option>
              <option value="EI">EI</option>
              <option value="CIV">CIVIL</option>
              <option value="MC">MECH</option>
              <option value="C++">7th</option>
              <option value="erlang">8th</option>
            </select>
          </li>
        </ul>
        <button onClick={addStudent}>Add</button>
      </div>
    </div>
  );
};

export default AddStudModal;
