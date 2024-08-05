import React, { useState, useContext } from "react";
import { AccountContext } from "../context/AccountProvide";
import "./Signup.css";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Signup = () => {
  const [action, setAction] = useState("Login");

  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
  };
  const onLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="parentcontainer">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Login" ? (
            <></>
          ) : (
            <div className="input">
              <input type="text" placeholder="User Name"></input>
              <p>
                <FaUser />
              </p>
            </div>
          )}

          <div className="input">
            <input type="e-mail" placeholder="E-mail"></input>
            <p>
              <IoMdMail />
            </p>
          </div>

          <div className="input">
            <input type="password" placeholder="Password"></input>
            <p>
              <FaLock />
            </p>
          </div>
        </div>

        <div className="loginSignup">
          <div
            className={action === "Signup" ? "active grey" : "active"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
          <div
            className={action === "Login" ? "active grey" : "active"}
            onClick={() => {
              setAction("Signup");
            }}
          >
            Signup
          </div>
        </div>
        <div className="googleAuth">
          <p>or</p>
          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
        </div>
      </div>
    </div>
  );
};
export default Signup;
