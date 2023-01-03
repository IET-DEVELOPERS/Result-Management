import React from "react";
import { redirect } from "react-router-dom";
import "../Css/homestyles.css";

const logo = require("../images/logo.png");

const home = () => {
  localStorage.removeItem("Admin");
  const View = () => {
    localStorage.removeItem("Admin");
    // redirect("/ViewResult");
  };

  const Admin = () => {
    localStorage.removeItem("Admin");
  };
  return (
    <>
      <div className="header">
        <img src={logo} className="img"></img>
        <br></br>

        <h2>WELCOME TO THE RESULT PORTAL</h2>
      </div>
      <div className="nav">
        <div className="inner">
          <ul>
            <li className="l11">
              <a href="/AdminLog" onClick={Admin}>
                Continue as Admin
              </a>
            </li>
            <li>
              <a href="/ViewResult" onClick={View}>
                Continue as Student
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header2">
        <h2>Created by IET-DEVELOPERS</h2>
      </div>
    </>
  );
};

export default home;
