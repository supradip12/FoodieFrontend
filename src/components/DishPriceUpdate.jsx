import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const DishPriceUpdate = () => {
    const [formData, setFormData] = useState({
        Email: '',
        Price:''
       });
       const navigate = useNavigate()
       
       const validUsername = 'user';
       const validPassword = 'password';
       const validEmail = 'user@example.com';
     
       // const navigate = useNavigate();
     
       // Handle input change
       const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }));
      };
     
       // Handle form submission
       const handleSubmit = (e) => {
         e.preventDefault();
        //  console.log(formData);
         setFormData({
            Email: '',
           Price: ''
          });
          navigate("/restaurent");
      
         
         // if (formData.name === validUsername && formData.email === validPassword) {
         //   alert('valid username or password');
         //   // return <Navigate to="/home" replace={true} />   
     
         // } else {
         //   alert('Invalid username or password');
         // }
         }
  return (
    <div className="form fw-bold" style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center"}}>
    <h2>Price Update</h2>
    <form style={{width: "24%"}} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label  className="form-label">
          Email address
        </label>
        <input
          type="text"
          id="Email" 
          name="Email"         
          value={formData.Email}
          onChange={handleChange}
          required
          aria-describedby="emailHelp"
          className="form-control" 
        />
        <div id="emailHelp" className="form-text">
         
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Enter Price
        </label>
        <input
           type="text"
           id="Price"  
           name="Price"        
           className="form-control"
           value={formData.Price}
           onChange={handleChange}
           required
          
        />
      </div>     
     
      <button type="submit" className="btn btn-primary fw-bold">
        Submit
      </button>
    </form>
  </div>
  );
}

export default DishPriceUpdate