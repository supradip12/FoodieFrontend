import { Button } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import RestCard from "./components/RestCard";
import axios from "axios";
import { Outlet } from "react-router-dom";

const Home = () => {

  let [notes,setNotes] = useState([]);
  let [fildata,setFildata] = useState([]) 
  let [searchTerm, setSearchTerm] = useState(["All","Indian","Chinese","Bengali","Italian"]);
  let[activeFilter, setActiveFilter] = useState("All");

  let resurl = import.meta.env.VITE_RES_URL;
  

   useEffect(() => {
    loadNotes();
   },[]);

   useEffect(()=>{
      if(activeFilter ==="All"){setFildata(notes)}
      else if (activeFilter) {
      let newFilteredData = notes.filter(note => note.category === activeFilter);
      setFildata(newFilteredData);
    } else {
      setFildata(notes); // Show all notes if no filter is active
    }
   },[activeFilter])

   async function loadNotes(){
    let data = await axios.get(`${resurl}/api/Restaurent`);
    
    setFildata(data.data)
    setNotes(data.data);
    
   }

   function onNotesChanged(){
      loadNotes();
   }

   const handleClick = (filter) => {
    setActiveFilter(filter);
    // You can do something with the clicked filter value here
    console.log("Clicked filter:", filter);
  };

  return (
    <>
      <div className="hero_area">
        <div className="bg-box">
          <img
            src="../images/hero-bg.jpg"
            alt=""
          />
        </div>
        {/* <!-- header section strats --> */}
        <header className="header_section">
          <div className="container"></div>
        </header>

        <section className="slider_section ">
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                          Doloremque, itaque aperiam facilis rerum, commodi,
                          temporibus sapiente ad mollitia laborum quam quisquam
                          esse error unde. Tempora ex doloremque, labore, sunt
                          repellat dolore, iste magni quos nihil ducimus libero
                          ipsam.
                        </p>
                        {/* <div className="btn-box">
                          <a href="" className="btn1">
                            Order Now
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>

          <ul className="filters_menu">
            {searchTerm.map((f,index)=><li key={index}
          className={activeFilter === f ? 'active' : ''}
          onClick={() => handleClick(f)}>
              {f}
            </li>)}
{/* 
            <li className="active" data-filter="*">
              All
            </li>
            <li data-filter={`.${fildata}`}></li>
            <li data-filter=".pizza">Pizza</li>
            <li data-filter=".pasta">Pasta</li>
            <li data-filter=".fries">Fries</li> */}
          </ul>

         
          <div className="filters-content">
            <div className="row grid">

              {fildata.map((m,index)=><RestCard key={index} value={m}/>)}
                      
             
            </div>
          </div>
        </div>
        {/* <Suspense fallback={<div>Loading...</div>}>
         <Outlet />
     </Suspense> */}
      </section>
    </>
  );
};

export default Home;
