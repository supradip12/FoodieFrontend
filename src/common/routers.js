import { createBrowserRouter } from "react-router-dom";
import App from "../App";


import { lazy } from "react";
import UserCreate from "../components/UserCreate";
import UserLogin from "../components/UserLogin";
import Order from "../Order";
import Dish from "../components/Dish";
import Restaurent from "../Restaurent";
import Orders from "../Orders";


function isUserAuthenticated(){
    let token = sessionStorage.getItem("Token");
    return token ? true : false;
}

function requireLogin()
{
    if(!isUserAuthenticated())
        window.location.href = "/login";

    return true;
}

export const routes = 

createBrowserRouter([
    { path : "/", Component : App, 
       
    }, 
    { path : "/login", Component : UserLogin,},
    { path : "/signup", Component : UserCreate,},
    { path : "/order/:id/:dishname", Component : Order,loader : requireLogin},
    { path : "/orders", Component : Orders},
    { path : "/dish/:id/:description", Component : Dish},
    { path : "/restaurent", Component : Restaurent},
]);
