import React from "react";
import { Link } from "react-router-dom";
import "../LogInPage/LogIn.css";
import { FaRegEyeSlash } from "react-icons/fa";

export const LogInPage = () => {
  return (
    <>
      <div className="login-container flex-center flex-direction-column border-round">
        <h2 className="heading text-size-md">LOGIN</h2>
        <div className="label-input-container flex-center flex-direction-column">
          <label htmlFor="Email" className="label-for-login ">
            Email Address
          </label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="input-textbox"
            required
          />
        </div>
        <div className="label-input-container flex-center flex-direction-column">
          <label htmlFor="password" className="label-for-login ">
            Password
          </label>
          <input
            type="password"
            placeholder="*********"
            className="input-textbox"
            required
          />
          <span className="show-hide-toggle-icon flex-center">
            <FaRegEyeSlash />
          </span>
        </div>
        <div className="remeber-and-forgotpasword-container flex-center">
          <label htmlFor="remeberme" className="rememberme-with-checkbox">
            <input type="checkbox" className="input-rememberme" />
            Remember me
          </label>
          <Link to="/" className="forgotpassword-text">
            Forgot Password
          </Link>
        </div>
        <span>
          <button className="btn login-btn border-round">Login</button>
        </span>
        <div className="new-user-link-container flex-center">
          <p>New User ?</p>
          <Link to="/signup" className="signup-link">
            Register Here
          </Link>
        </div>
      </div>
    </>
  );
};
