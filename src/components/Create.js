import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Create() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
const handleSubmit = (event) => {
event.preventDefault();
axios.post('https://64779e489233e82dd53bf03b.mockapi.io/crud',{
    e_name: name,
    e_age: age,
    e_email: email
}).then(()=>{
  navigate('/');
}).catch((err)=>{
  console.log(err);
});
}



  return (
    <>
      <div className="row">
        <div className="col-md-4">
        <div className="mb-2 mt-2">
            <Link to='/'>
            <button className="btn btn-primary">Read Data</button>
            </Link>
            </div>
            <div className="bg-primary p-4 text-center">
<h1>create Data</h1>
            </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Enter Name: </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="form-control" />
            </div>
            <div className="form-group">
                <label>Enter Age: </label>
                <input type="number"  value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age"  className="form-control" />
            </div>
            <div className="form-group">
                <label>Enter Email: </label>
                <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="form-control" />
            </div>
            <br />
           <div className="d-grid">
           <input type="submit" value="submit" className="btn btn-primary" />
           </div>
          </form>
         
        </div>
      </div>
    </>
  );
}

export default Create;
