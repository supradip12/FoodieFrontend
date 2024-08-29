import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import Header from "./components/Header";

const Order = () => {


//   const location = useLocation();
//   const url = location.pathname;
//  const basePath = '/order/';
//  const startIndex = url.indexOf(basePath) + basePath.length;
//  const result = url.substring(startIndex);

 let {id,dishname} = useParams();
 

  let { register, handleSubmit, formState: error } = useForm();
  let [isLoginFailed, setLoginFailed] = useState(false);
  const token = sessionStorage.getItem('Token');
  let ordurl=import.meta.env.VITE_ORD_URL;

  async function login(data) {
    if (data) {
      try {
        
        const response = await axios.post(`${ordurl}/api/Order`, data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Attach token to the request
          }
        });
  
        // Handle successful response
        // console.log('Success:', response.data);
        alert('Order submitted successfully!');
        window.location.href = "/";
        
      } catch (error) {
        // console.error('Error:', error);
        alert('Failed to submit order.');
      }
    } else {
      setLoginFailed(true);
    }
  }

  return (
    <>
    <Header/>
    <div
      className="form fw-bold"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
      >
      <h2>Order</h2>

      {isLoginFailed && (
        <div className="alert alert-danger mt-5">Invalid Email or Password</div>
      )}
      <form
        onSubmit={handleSubmit(login)}
        style={{ width: "24%" }}
        className="text-start"
        >
        <div className="form-group">
          <label htmlFor="email">RestaurentEmail</label>
          <TextField
            variant="outlined"
            type="email"
            value={id}
            {...register("RestaurantEmail", {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
            className="form-control"
            id="email"
            placeholder="Enter email"
            />
        </div>
        {error.errors.RestaurantEmail && (
          <span className="text-danger">Invalid Email</span>
        )}
        <div className="form-group mt-4">
          <label htmlFor="text">UserName</label>
          <TextField
            type="text"
            variant="outlined"
            className="form-control"
            {...register("UserName", { required: true })}
            id="UserName"
            placeholder="UserName"
            />
        </div>
        {error.errors.UserName && (
          <span className="text-danger">UserName is required</span>
        )}

        <div className="form-group mt-4">
          <label htmlFor="text">DishName</label>
          <TextField
            type="text"
            value={dishname}
            variant="outlined"
            className="form-control"
            {...register("DishName", {
              required: true,
              
            })}
            id="DishName"
            placeholder="DishName"
            />
        </div>
        {error.errors.DishName && (
          <span className="text-danger">DishName is required</span>
        )}
        <div className="form-group mt-4">
          <label htmlFor="text">Address</label>
          <TextField
            type="Address"
            variant="outlined"
            className="form-control"
            {...register("Address", { required: true })}
            id="Address"
            placeholder="Address"
            />
        </div>
        {error.errors.Address && (
          <span className="text-danger">Address is required</span>
        )}
        <Button variant="contained" type="submit" className="mt-4 w-100">
          Order
        </Button>
      </form>
    </div>
        </>
  );
};

export default Order;
