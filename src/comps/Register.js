import React from "react";
import "./register.css";
const imageUrl =
  "https://upload.wikimedia.org/wikipedia/en/b/b4/Howard_Bison_logo.svg";

export function Register() {
  return (
    <>
      <div className="Centered">
        <div className="Box">
          <div className="LogoContainer">
            <img src={imageUrl} alt="Howard Bison Logo" className="Logo" />
          </div>

          <form>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <div className="registerbtn">
              <button type="submit">
                <a className="buttonlink" href="/setup">
                  Register
                </a>
              </button>
            </div>
          </form>
          <div className="signInLine">
            Already Registered?
            <a href="/login" className="Loginbtn">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
