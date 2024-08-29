import axios from "axios";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Header from "./components/Header";


const Orders = () => {

  let [notes,setNotes] = useState([]);
  let resurl = import.meta.env.VITE_ORD_URL;
  

  useEffect(() => {
    loadNotes();
   },[]);
   const token = sessionStorage.getItem('Token');
   

  async function loadNotes(){
    let data = await axios.get(`${resurl}/api/Order`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Attach token to the request
      }
    });   
    // console.log(data.data);
    setNotes(data.data);
    
   }
  return (
    <>
     <Header/>
    <div style={{ display: "flex", justifyContent: "center", margin: "8px" }}>
      <table className="table" style={{width:'84%',borderRadius:'8px'}}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">RestaurentID</th>
            <th scope="col">UserName</th>
            <th scope="col">DishName</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((n,index)=>  <tr key={index}>
            <th scope="row">{n.id}</th>
            <td>{n.restaurantEmail}</td>
            <td>{n.userName}</td>
            <td>{n.dishName}</td>
            <td>{n.address}</td>
          </tr>)}
         
         
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Orders;
