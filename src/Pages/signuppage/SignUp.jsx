import React from "react";
import "../LogInPage/LogIn.css";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import "./Signup.css";

export const SignUpPage = () => {
  return (
    <div className="login-container flex-center flex-direction-column border-round">
      <h2 className="heading text-size-md">SignUp</h2>
      <div className="label-input-container flex-center flex-direction-column">
        <label htmlFor="Name" className="label-for-login ">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="input-textbox"
          id="Name"
          required
        />
      </div>
      <div className="label-input-container flex-center flex-direction-column">
        <label htmlFor="Email" className="label-for-login ">
          Email Address
        </label>
        <input
          type="email"
          placeholder="abc@gmail.com"
          className="input-textbox"
          id="Email"
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
          id="password"
          required
        />
        <span className="show-hige-toggle-icon password-badge flex-center">
          <FaRegEyeSlash />
        </span>
      </div>
      <div className="label-input-container flex-center flex-direction-column">
        <label htmlFor="Confirm password" className="label-for-login ">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="*********"
          className="input-textbox"
          id="Confirm password"
          required
        />
        <span className="show-hige-toggle-icon confirm-password-badge flex-center">
          <FaRegEyeSlash />
        </span>
      </div>
      <span>
        <button className="btn login-btn border-round">Register</button>
      </span>
      <div className="new-user-link-container flex-center">
        <p>Already Registered ?</p>
        <Link to="/loginpage" className="signup-link">
          Log In Here
        </Link>
      </div>
    </div>
  );
};
