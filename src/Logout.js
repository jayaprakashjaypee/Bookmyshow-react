import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
const navigate = useNavigate();
const logout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("time");
    localStorage.removeItem("theatre");
    localStorage.removeItem("movie");
    
navigate("/");
}

  return (
   <button className='btn btn-danger' onClick={()=>{logout()}}>Logout</button>
  )
}

export default Logout