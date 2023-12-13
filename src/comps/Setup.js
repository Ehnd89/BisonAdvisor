import React, { useState } from "react";
import "./setup.css";

function Setup() {
  const options = [
    { label: "Computer Science", value: "Computer Science" },
    { label: "Computer Engineer", value: "Computer Engineer" },
    { label: "Health", value: "Health" },
  ];
  return (
    <>
      <div className="QuestionBox">
        <p className="welcome">Welcome, setup your profile!</p>
        <form className="setupForm">
          <label htmlFor="major">Major:</label>
          <input type="text" id="major" name="major" />

          <label htmlFor="minor">Minor:</label>
          <input type="text" id="minor" name="minor" />

          <div className="graduationDate">
            <label htmlFor="month">Expected Graduation Month:</label>
            <input type="text" id="month" name="month" />
            <label htmlFor="year">Expected Graduation Year:</label>
            <input type="text" id="year" name="year" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Setup;
