import React,{useState} from 'react'
const RestaurentLoginForm = () => {
    const [formData, setFormData] = useState({
        Email: '',
        Name: '',
        Category:'',
        Location:'',
        RestaurentImage:'',
        ContactDetails:''
       });
       
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
            Name: '',
            Category: '',
            Location: '',
            RestaurentImage: '',
            ContactDetails: ''
          });
      
         
         // if (formData.name === validUsername && formData.email === validPassword) {
         //   alert('valid username or password');
         //   // return <Navigate to="/home" replace={true} />   
     
         // } else {
         //   alert('Invalid username or password');
         // }
         }
  return (
    <div className="form fw-bold" style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center"}}>
    <h2>Create Restaurent</h2>
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
          Enter RestaurentName
        </label>
        <input
           type="text"
           id="Name"  
           name="Name"        
           className="form-control"
           value={formData.Name}
           onChange={handleChange}
           required
          
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Enter Category
        </label>
        <input
           type="text"
           id="Category" 
           name="Category"         
           className="form-control"
           value={formData.Category}
           onChange={handleChange}
           required
          
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Enter Location
        </label>
        <input
           type="text"
           id="Location"   
           name="Location"      
           className="form-control"
           value={formData.Location}
           onChange={handleChange}
           required
          
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Enter RestaurentImage
        </label>
        <input
           type="text"
           id="RestaurentImage" 
           name="RestaurentImage"         
           className="form-control"
           value={formData.RestaurentImage}
           onChange={handleChange}
           required
          
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Enter PhoneNumber
        </label>
        <input
           type="text"
           id="ContactDetails"    
           name="ContactDetails"      
           className="form-control"
           value={formData.ContactDetails}
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


export default RestaurentLoginForm