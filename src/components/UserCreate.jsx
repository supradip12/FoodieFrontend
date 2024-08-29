import React, { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import axios from "axios";

const UserCreate = () => {
  let { register, handleSubmit, formState: error } = useForm();
  let [isLoginFailed, setLoginFailed] = useState(false);
  let resurl = import.meta.env.VITE_USE_URL;
  async function login(data) {
    if (data) {
      try {
       
        const response = await axios.post(`${resurl}/api/user`, data);
        // console.log('Signup successful', response.data);
        alert("User Created")
        window.location.href = "/login";
      } catch (error) {
        // console.error('Signup error', error);
        alert("User not Created")
        // Handle error (e.g., show an error message)
      }
      // window.location.href = "/";
    } else {
      alert("User not Created")
      setLoginFailed(true);
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
      <h2>SignUp</h2>

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
          <label htmlFor="text">Name</label>
          <TextField
            type="text"
            variant="outlined"
            className="form-control"
            {...register("Name", { required: true })}
            id="name"
            placeholder="Name"
          />
        </div>
        {error.errors.Name && (
          <span className="text-danger">Name is required</span>
        )}

        <div className="form-group mt-4">
          <label htmlFor="tel">PhoneNumber</label>
          <TextField
            type="tel"
            variant="outlined"
            className="form-control"
            {...register("PhoneNumber", {
              required: true,
              pattern: /^[1-9][0-9]{9}$/,
            })}
            id="tel"
            placeholder="PhoneNumber"
          />
        </div>
        {error.errors.PhoneNumber && (
          <span className="text-danger">PhoneMunber is required</span>
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
          SignUp
        </Button>
      </form>

      <div className="mt-5">
        Have a account ? <Link to="/login">Login</Link>
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}>
         <Outlet />
     </Suspense> */}

    </div>
  );
};

export default UserCreate;
