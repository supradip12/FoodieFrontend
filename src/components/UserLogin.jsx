import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const UserLogin = () => {
  let { register, handleSubmit, formState: error } = useForm();
  let [isLoginFailed, setLoginFailed] = useState(false);
  let resurl = import.meta.env.VITE_USE_URL;

  async function login(data) {
    try {
      const response = await axios.post(`${resurl}/api/User/Validate`, data);
      sessionStorage.setItem("Token", response.data.token);
      alert("Login Suessfull");
            window.location.href = "/";

      // console.log('Login successful', response.data.token);
          } catch (error) {
            alert("Not Logged in");
      // console.error('Login error', error);
      }
  }

  return (
    <div
      className="form fw-bold"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <h2>Login</h2>

      {isLoginFailed && (
        <div className="alert alert-danger mt-5">Invalid Email or Password</div>
      )}
      <form
        onSubmit={handleSubmit(login)}
        style={{ width: "24%" }}
        className="text-start"
      >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <TextField
            variant="outlined"
            type="email"
            {...register("Email", {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        {error.errors.Email && (
          <span className="text-danger">Invalid Email</span>
        )}
        <div className="form-group mt-4">
          <label htmlFor="password">Password</label>
          <TextField
            type="password"
            variant="outlined"
            className="form-control"
            {...register("Password", { required: true })}
            id="password"
            placeholder="Password"
          />
        </div>
        {error.errors.Password && (
          <span className="text-danger">Password is required</span>
        )}
        <Button variant="contained" type="submit" className="mt-4 w-100">
          Login
        </Button>
      </form>

      <div className="mt-5">
        Dont have a account ? <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default UserLogin;
