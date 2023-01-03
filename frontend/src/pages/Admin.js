import React, { useState } from "react";
import AddStudModal from "../components/AddStudModal";
import "../Css/AdminLoginstyles.css";
const logo = require("../images/logo.png");

const Admin = () => {
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [Data, setData] = useState([]);
  const [addStud, setAddStud] = useState(false);

  const show = async () => {
    let user = localStorage.getItem("Admin");
    user = JSON.parse(user);

    if (branch === "" || branch === "Select") {
      alert("select a branch");
    }
    if (semester === "Select" || semester === "") {
      alert("select a semester");
    }

    let students = await fetch(
      `http://localhost:5050/api/student/all?branch=${branch}&sem=${semester}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    students = await students.json();

    if (students) {
      setData(students);
    }
  };

  let showModal = () => {
    setAddStud(true);
  };
  let addStudent = () => {
    setAddStud(false);
  };
  return (
    <div>
      <div className="header">
        <img src={logo} className="img"></img>
        <br></br>
      </div>
      <div>
        <ul className="l1">
          <li>
            <a className="onthis">Class-Wise List</a>
          </li>
          <li>
            <a href="/UpdateResult">RollNumber-Wise</a>
          </li>
        </ul>
      </div>

      <div>
        <ul className="listno2">
          <li>
            <label for="semester">Semester</label>
            <select
              name="semester"
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
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
          <li>
            <button type="button" className="btn1" onClick={show}>
              {" "}
              Show{" "}
            </button>
          </li>
          <li>
            <button type="button" className="btn1" onClick={showModal}>
              Add Student{" "}
            </button>
          </li>
        </ul>
      </div>
      <AddStudModal open={addStud} set={setAddStud} />
      {Data.length > 0 && (
        <div>
          <ol>
            <ul className="unordl12">
              <li>NAME</li>
              <li>BRANCH</li>
              <li>SEMESTER</li>
              <li>ROLL-NUMBER</li>
              <li>OPTION</li>
            </ul>
            {Data.map((item) => {
              return (
                <ul className="unordl1">
                  <li>{item.name}</li>
                  <li>{item.branch}</li>
                  <li>{item.sem}</li>
                  <li>{item.rollNo}</li>
                  <li>
                    <a href="/UpdateResult">Update</a>
                  </li>
                </ul>
              );
            })}
          </ol>
        </div>
      )}

      {Data.length === 0 && (
        <div>
          <h2>no record</h2>
        </div>
      )}
    </div>
  );
};

export default Admin;
