import React from "react";
import "./login.css";
const imageUrl =
  "https://upload.wikimedia.org/wikipedia/en/b/b4/Howard_Bison_logo.svg";

function LogIn() {
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

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <div className="loginbtn">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="signInLine">
            Aren't Registered?
            <a href="/register" className="Registerbtn">
              Register
              <div className="Continuebtn">
              <button type="submit">Continue</button>
            </div>              
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
