import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";


const App = () => {

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


  return (
    <div>
      <>
        <Header />
        <Home/>

        {/* <Routes>
          {sessionStorage.getItem("Token")}
           />
          {/* <Route path="/orders" element={<Orders />} /> */}
          {/* <Route path="/admin" element={<Admin />} />
          <Route path="/feedback" element={<Feedback />} /> */}
          {/* <Route path="/restaurent/login" element={<ResLogin />} />
          <Route path="/restaurent/priceupdate" element={<DishPriceUpdate />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/appres" element={<ApproveRestaurent />} />
          <Route path="/admin/disres" element={<DisapproveRestaurent />} />
          <Route path="/testing" element={<Testing />} /> */}
        {/* </Routes> */} 
      </>
    </div>
  );
};

export default App;
