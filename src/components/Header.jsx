import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ()=>{

    return(
        <header className="header_section bg-dark  ">
      <div className="container">
       
      
        <div> <nav className="navbar navbar-expand-lg custom_nav-container ">
        <Link className="navbar-brand" to="/">
          <span>
           Foodie
          </span>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""> </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mx-auto " style={{paddingLeft:"79%"}}>
            <li className="nav-item ">
              <Link to="/" className={`nav-link ${location.pathname==="/"? "active": ""}`} >Home </Link>
            </li>
            {/* <li className="nav-item">
            <Link to="/orders" className={`nav-link ${location.pathname==="/orders"? "active": ""}`} >Orders </Link>
            </li>
            <li className="nav-item">
            <Link to="/restaurent" className={`nav-link ${location.pathname==="/restaurent"? "active": ""}`} >Restaurent </Link>
            </li>
            <li className="nav-item">
            <Link to="/admin" className={`nav-link ${location.pathname==="/admin"? "active": ""}`} >Admin </Link>
            </li>
            <li className="nav-item">
            <Link to="/feedback" className={`nav-link ${location.pathname==="/feedback"? "active": ""}`} >FeedBack </Link>
            </li> */}
            <li className="nav-item">
            <Link to="/signup" className={`nav-link ${location.pathname==="/signup"? "active": ""}`} >SignUp </Link>
            </li>
          </ul>
         
        </div>
      </nav>
    </div>
    </div>
    {/* <Suspense fallback={<div>Loading...</div>}>
         <Outlet />
     </Suspense> */}
    </header>
    )
}

export default Header;