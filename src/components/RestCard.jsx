import { Button } from "@mui/material";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const RestCard = (props) => {
  
  return (
    <div className="col-sm-6 col-lg-4 all burger">
      <div className="box">
        <div >
        <img className="card-img-top" style={{height:"200px"}} src={props.value.restaurentImage} alt="Tasty Burger"/>     
         </div>
        <div className="detail-box">
          <h5>{props.value.name}</h5>
          <p>{props.value.location}            
          </p>
          <p>{props.value.contactDetails
          }            
          </p>
          <Link to={`/dish/${props.value.email}/${props.value.contactDetails}`}>
            <Button data={props.value.name} variant="contained">
              Explore
            </Button>
          </Link>
        </div>
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}>
         <Outlet />
     </Suspense> */}

    </div>
  );
};

export default RestCard;
