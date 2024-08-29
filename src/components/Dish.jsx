import React, { useEffect, useState } from "react";
import DishItem from "./DishItem";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const Dish = () => {
//  const location = useLocation();
//  const url = location.pathname;
// const basePath = '/dish/';
// const startIndex = url.indexOf(basePath) + basePath.length;
// const result = url.substring(startIndex);
// console.log(result)

const {id,description} = useParams()

let resurl = import.meta.env.VITE_DIS_URL;

let [dish,setdish] = useState([]);
 let[resName,setResName] = useState("");

   useEffect(() => {
    loadNotes();  
    
   },[]);

   async function loadNotes(){
    let data = await axios.get(`${resurl}/api/Dish/${id}`);
    setResName(data.data[0].restaurentName)
    // console.log(data.data);
    setdish(data.data);
   }

   function onNotesChanged(){
      loadNotes();
   }

  return (
    <>
    <Header/>
    <div className="container" style={{ marginTop: "6px" }}>
      <div className="card w-75 mb-3">
        <div className="card-body">
          <h2 className="card-title">{resName}</h2>
         
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
       
       {dish.map((m,index)=><DishItem key={index} data={m}/>)}
       {/* {dish.map((m)=> <DishItem val={m} />)} */}
     
    </div>
    </>
  );
};

export default Dish;
