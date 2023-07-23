import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Edit() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setAge(localStorage.getItem("age"));
      setEmail(localStorage.getItem("email"));
    }, [])
    
    const handleUpdate = (e)=> {
e.preventDefault();
axios.put( `https://64779e489233e82dd53bf03b.mockapi.io/crud/${id}`,{
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
<h1>Update Data</h1>
          </div>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
              <label>Enter Name: </label>
              <input type="text" onChange={(event) =>setName(event.target.value)} placeholder="Name" className="form-control" />
          </div>
          <div className="form-group">
              <label>Enter Age: </label>
              <input type="number" onChange={(event) =>setAge(event.target.value)} placeholder="Age"  className="form-control" />
          </div>
          <div className="form-group">
              <label>Enter Email: </label>
              <input type="email" onChange={(event) =>setEmail(event.target.value)} placeholder="Email" className="form-control" />
          </div>
          <br />
         <div className="d-grid">
         <input type="submit" value="Update" className="btn btn-primary" />
         </div>
        </form>
    
      </div>
    </div>
  </>
  )
}

export default Edit
