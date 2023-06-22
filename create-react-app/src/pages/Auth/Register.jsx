import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isEmail, isEmpty, equals } from "validator";
import API from "apis";
import Button from "components/common/Button";
import TextField from "components/common/TextField";
import UserIcon from "assets/images/icons/user.svg";
import LockIcon from "assets/images/icons/lock.svg";
import EmailIcon from "assets/images/icons/email.svg";

const Register = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const handleSignUp = () => {
    setError({});
    if (isEmpty(userInfo.name)) {
      setError({ name: "Name is not allowed to be empty" });
      return;
    }
    if (isEmpty(userInfo.email)) {
      setError({ email: "Email is not allowed to be empty" });
      return;
    }
    if (!isEmail(userInfo.email)) {
      setError({ email: "Email must me a valid email" });
      return;
    }
    if (isEmpty(userInfo.password)) {
      setError({ password: "Password must me a valid email" });
      return;
    }
    if (isEmpty(userInfo.confirmPassword)) {
      setError({ confirmPassword: "Confirm password must me a valid email" });
      return;
    }
    if (!equals(userInfo.password, userInfo.confirmPassword)) {
      setError({ password: "Passwords must be match" });
      return;
    }
    API.auth
      .register({
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
      })
      .then((res) => {
        navigate("/login");
      });
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center pt-[100px]">
      <div className="w-full max-w-screen-sm px-16 py-14 shadow-card">
        <h3 className="font-bold text-[32px] leading-10 text-[#111] text-center mb-6">
          Register Now!
        </h3>
        <p className="text-base text-center text-[#656565] mb-14">
          You can signup with you social account below
        </p>
        <TextField
          type="text"
          placeholder="Enter your name"
          value={userInfo.name}
          onChange={handleChange}
          error={error.name}
          helperText={error.name}
          name="name"
          className="mb-6"
          icon={
            <img
              src={UserIcon}
              className="w-10 h-10 opacity-80"
              alt="user icon"
            />
          }
        />
        <TextField
          type="email"
          placeholder="Enter your email"
          value={userInfo.email}
          onChange={handleChange}
          error={error.email}
          helperText={error.email}
          name="email"
          className="mb-6"
          icon={
            <img
              src={EmailIcon}
              className="w-6 h-6 opacity-80"
              alt="email icon"
            />
          }
        />
        <TextField
          type="password"
          placeholder="Password"
          value={userInfo.password}
          onChange={handleChange}
          error={error.password}
          helperText={error.password}
          name="password"
          className="mb-6"
          icon={
            <img
              src={LockIcon}
              className="w-8 h-8 opacity-80"
              alt="lock icon"
            />
          }
        />
        <TextField
          type="password"
          placeholder="Confirm Password"
          value={userInfo.confirmPassword}
          onChange={handleChange}
          error={error.confirmPassword}
          helperText={error.confirmPassword}
          name="confirmPassword"
          className="mb-10"
          icon={
            <img
              src={LockIcon}
              className="w-8 h-8 opacity-80"
              alt="lock icon"
            />
          }
        />
        <Button className="mb-8" onClick={handleSignUp} fullWidth>
          Sign Up
        </Button>
        <p className="text-center">
          Already have an account? &nbsp;
          <Link to="/login" className="text-theme cursor-pointer">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
