import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../LogInPage/LogIn.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  initialLogInData,
  guestData,
} from "../../Context/Constants/AuthConstant";
import { useAuth } from "../../Context/Auth-context";
import { Loader } from "../../Components";
import { useVideos } from "../../Context";

export const LogInPage = () => {
  const [logInData, setLogInData] = useState(initialLogInData);

  const [passVisible, setPassVisible] = useState(true);
  const { logInHandler } = useAuth();
  const { isLoading } = useVideos();
  console.log(isLoading, "loader");

  const logInChaneHnadler = (e) => {
    const { name, value } = e.target;
    setLogInData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <>
      <div className="login-container flex-center flex-direction-column border-round">
        <h2 className="heading text-size-md">LOGIN</h2>
        <form>
          <div className="label-input-container flex-center flex-direction-column">
            <label htmlFor="Email" className="label-for-login ">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              className="input-textbox"
              id="Email"
              onChange={logInChaneHnadler}
              required
            />
          </div>
          <div className="label-input-container flex-center flex-direction-column">
            <label htmlFor="password" className="label-for-login ">
              Password
            </label>
            <input
              type={passVisible ? "password" : "text"}
              name="password"
              placeholder="*********"
              className="input-textbox"
              id="password"
              onChange={logInChaneHnadler}
              required
            />
            <span className="show-hide-toggle-icon flex-center">
              {passVisible ? (
                <FaEyeSlash onClick={() => setPassVisible(!passVisible)} />
              ) : (
                <FaEye onClick={() => setPassVisible(!passVisible)} />
              )}
            </span>
          </div>
          <span>
            <button
              className="btn login-btn border-round"
              onClick={(e) => {
                e.preventDefault(), logInHandler(logInData);
              }}
            >
              Login
            </button>
          </span>
          <span>
            <button
              className="btn login-btn-outline border-round"
              onClick={(e) => {
                e.preventDefault(), logInHandler(guestData);
              }}
            >
              Login As Guest
            </button>
          </span>
          <div className="new-user-link-container flex-center">
            <p>New User ?</p>
            <Link to="/signup" className="signup-link">
              Register Here
            </Link>
          </div>
        </form>
        {isLoading && (
          <div className="loader">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};
