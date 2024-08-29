import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
const DishItem = (props) => {
//   avaliableTime
// : 
// "12:00-22:00"
// category
// : 
// "Pasta"
// code
// : 
// "DIS123"
// description
// : 
// "Creamy spaghetti with pancetta and cheese"
// dishImage
// : 
// "carbonara.jpg"
// dishName
// : 
// "Spaghetti Carbonara"
// isDisable
// : 
// "Enable"
// price
// : 
// "15.99"
// restaurentEmail
// : 
// "Empire@itcinfotech"
// restaurentName
// : 
// "La Dolce Vita"
  console.log("vkvgkgjt"+props.data.code);
  return (
    <div className="container">
      <div class="card mb-3 card w-75">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={props.data.dishImage}
              class="img-fluid rounded-start"
              alt="Food Image"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{props.data.dishName}</h5>
              <p class="card-text">
              {props.data.description}
              </p>
              <p style={{fontWeight:"bold"}}>Price :{props.data.price}</p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Avaliable Time :{props.data.avaliableTime}
                </small>
              </p>
              <Link to={`/order/${props.data.restaurentEmail}/${props.data.dishName}`}>
                <button
                  type="button"
                  style={{ margin: "8px" }}
                  className="btn btn-primary"
                >
                  Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}>
         <Outlet />
     </Suspense> */}

    </div>
  );
};

export default DishItem;
