import {useState} from "react"
const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const validUsername = 'user';
  const validPassword = 'password';
  // const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name === validUsername && formData.email === validPassword) {
      alert('valid username or password');
      // return <Navigate to="/home" replace={true} />   

    } else {
      alert('Invalid username or password');
    }
  };



  return (
    <div className="form fw-bold" style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center"}}>
      <h2>Order</h2>
      <form style={{width: "24%"}} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label  className="form-label">
            Email address
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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
            Password
          </label>
          <input
             type="text"
             id="texting"
             name="email"
             className="form-control"
             value={formData.email}
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
};

export default Form;
