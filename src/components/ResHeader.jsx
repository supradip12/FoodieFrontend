import React from "react";
import { Link } from "react-router-dom";

const ResHeader = () => {
  return (
    <div className="" style={{display:"flex",justifyContent:"space-around",margin:"6px", width: "15%"}}>
       
    
    <Link to="/restaurent/login">
    <button type="button"  style={{margin: "8px"}}className="btn btn-primary">Login</button>
    </Link>
    
    
    <Link to="/restaurent/priceupdate">
    <button type="button"  style={{margin: "8px"}}className="btn btn-primary">PriceUpdate</button>
    </Link>
    {/* <button type="button"  style={{margin: "8px"}}className="btn btn-primary">P</button> */}

 

 
      
    </div>
  );
};

export default ResHeader;
