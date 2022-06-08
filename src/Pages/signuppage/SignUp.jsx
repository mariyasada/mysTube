import React, { useState } from "react";
import "../LogInPage/LogIn.css";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { initialSignUpData } from "../../Context/Constants/AuthConstant";
import { useAuth } from "../../Context/Auth-context";
import { FaEyeSlash, FaEye } from "../../Components/Icons";
import toast from "react-hot-toast";
import { useVideos } from "../../Context";
import { Loader } from "../../Components";

export const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState(initialSignUpData);
  const [passVisible, setPassVisible] = useState(true);
  const [conPassVisible, setConPassVisible] = useState(true);
  const [errmessage, seterrMessage] = useState("");
  const { signUpHandler } = useAuth();
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useVideos();

  const signupChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
    seterrMessage("");
  };

  const passwordMathcingHandler = (e, pwd1, pwd2) => {
    if (pwd1 === pwd2) {
      seterrMessage("");
      e.preventDefault();
      signUpHandler({ signUpData });
    } else {
      e.preventDefault();
      seterrMessage("password and confirmpassord doesn't match");
      navigate("/signup");
    }
  };
  return (
    <form className="login-container flex-center flex-direction-column border-round">
      <h2 className="heading text-size-md">SignUp</h2>
      <div className="label-input-container flex-center flex-direction-column">
        <label htmlFor="Name" className="label-for-login signup-label ">
          First Name
        </label>
        <input
          type="text"
          placeholder="First Name"
          className="input-textbox"
          id="FirstName"
          name="firstName"
          onChange={signupChangeHandler}
          required
        />
      </div>
      <div className="label-input-container flex-center flex-direction-column">
        <label htmlFor="Name" className="label-for-login signup-label ">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Last Name"
          className="input-textbox"
          id=" LastName"
          name="lastName"
          required
          onChange={signupChangeHandler}
        />
      </div>
      <div className="label-input-container flex-center flex-direction-column">
        <label htmlFor="Email" className="label-for-login signup-label ">
          Email Address
        </label>
        <input
          type="email"
          placeholder="abc@gmail.com"
          className="input-textbox"
          id="Email"
          name="email"
          onChange={signupChangeHandler}
          required
        />
      </div>
      <div className="label-input-container flex-center flex-direction-column">
        <label htmlFor="password" className="label-for-login signup-label ">
          Password
        </label>
        <input
          type={passVisible ? "password" : "text"}
          placeholder="*********"
          className="input-textbox"
          id="password"
          name="password"
          onChange={signupChangeHandler}
          required
        />
        <span className="show-hide-toggle-icon password-badge flex-center">
          {passVisible ? (
            <FaEyeSlash
              onClick={() => setPassVisible(!passVisible)}
              className="icon"
            />
          ) : (
            <FaEye
              onClick={() => setPassVisible(!passVisible)}
              className="icon"
            />
          )}
        </span>
      </div>
      <div className="label-input-container flex-center flex-direction-column">
        <label
          htmlFor="Confirm password"
          className="label-for-login signup-label "
        >
          Confirm Password
        </label>
        <input
          type={conPassVisible ? "password" : "text"}
          placeholder="*********"
          className="input-textbox"
          id="Confirm password"
          name="confirmpassword"
          onChange={signupChangeHandler}
          required
        />
        <span className="show-hide-toggle-icon confirm-password-badge flex-center">
          {conPassVisible ? (
            <FaEyeSlash
              onClick={() => setConPassVisible(!conPassVisible)}
              className="icon"
            />
          ) : (
            <FaEye
              onClick={() => setConPassVisible(!conPassVisible)}
              className="icon"
            />
          )}
        </span>
      </div>
      <p className="error-msg">{errmessage}</p>
      <span>
        <button
          className="btn login-btn border-round"
          onClick={(e) =>
            passwordMathcingHandler(
              e,
              signUpData.password,
              signUpData.confirmpassword
            )
          }
        >
          Register
        </button>
      </span>

      <div className="new-user-link-container flex-center">
        <p>Already Registered ?</p>
        <Link to="/loginpage" className="signup-link">
          Log In Here
        </Link>
      </div>
      {isLoading && (
        <div className="loader">
          <Loader />
        </div>
      )}
    </form>
  );
};
