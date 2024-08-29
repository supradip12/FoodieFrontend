import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const ResLogin = () => {
    const [formData, setFormData] = useState({
        Email: '',
        Password:''
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
           Password: ''
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
    <h2>Login</h2>
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
          Enter password
        </label>
        <input
           type="text"
           id="Password"  
           name="Password"        
           className="form-control"
           value={formData.Password}
           onChange={handleChange}
           required
          
        />
      </div>     
     
      <button type="submit" className="btn btn-primary fw-bold">
        Submit
      </button>
    </form>
  </div>
  )
}


export default ResLogin