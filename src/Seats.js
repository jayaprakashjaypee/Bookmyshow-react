import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { config } from './Config';
import { useNavigate } from 'react-router-dom';
import { color } from '@mui/system';
import Logout from './Logout';

function Seats() {
const [seat,setseat]=useState([]);
const [count,setcount]=useState(0);
const [booked,setbooked]=useState([]);
fetch = async()=>{
    try{
    const seat = await axios.get(`${config().api}/server/seats`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      } );
     setseat(seat.data);
    
    }
    catch(err){
        console.log(err);
    }
}

useEffect(()=>{
    fetch();
  
},[])

const bookings = async(seatid)=>{
    const index = seat.findIndex((x)=>x._id===seatid);
    seat[index].booking=true;

    const temp = booked.some((x)=>x.row==seat[index].row && x.column==seat[index].column);
    setcount(booked.length*180);


    
if(!temp){
    
    setbooked([{row:seat[index].row,column:seat[index].column},...booked]);
    
    console.log(booked);
}

  
   
}
const navigate = useNavigate();
const handlesubmit = async()=>{
    if(booked.length>0){
    var str="";
    for(let i=0;i<booked.length;i++){
str+=booked[i].column+booked[i].row+" "
    }
    try{
    await axios.put(`${config().api}/server/seats/booking`,{booked}, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
    }
    catch(err){
        console.log(err);
    }
    try{
       
        await axios.post(`${config().api}/server/movies/email`,{movie:localStorage.getItem("movie"),seat:str,theatre:localStorage.getItem("theatre"),time:localStorage.getItem("time"),userid:localStorage.getItem("userid"),total:booked.length*180}, {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          })
    navigate("/ticket");
        
    }
    catch(err){
        console.log(err);
    }
}

}


  return (
  <> 
  <div className='seatheading'style={{background:"#334" ,color:"white"}}>
    <h3>BOOKMYSHOW</h3>
 <h1  className='text-center'>{localStorage.getItem("movie")}</h1></div>
    <div className='container d-flex flex-wrap justify-content-around' style={{background:"grey"}}  >
        
    {seat.map((x)=>{
        return(<button disabled={x.booking} onClick={()=>{bookings(x._id)}} className={x.booking ? `notseat` : `seat` }>{`${x.column}${x.row}`}</button>)
    })}
   
 </div> <br/><br/>
 <div className='screen'style={{width:"400px",height:"20px",marginLeft:"550px",border:"darkGrey solid 1px" ,background:"lightGrey",marginTop:"-30px",alignItems:"center",display:"flex", justifyContent:"center"}}>
Screen
</div>
 <div className='container d-flex align-items-center justify-content-center'>
 {
 booked.map((x)=>{
    return( <p className='ms-2'>{x.column}{x.row}</p>)
 })
    }
    
    </div>

    <div className='analogue' style={{width:"30px",height:"30px",background:"darkgreen" ,borderRadius:"2px", marginLeft:"300px"}}>


    </div> <h4 style={{marginLeft:"340px" ,marginTop:"-30px"}}>Booked/Blocked Seats</h4><br/>
    <div className='analogue' style={{width:"30px",height:"30px",border:"darkGreen solid 1px" ,borderRadius:"2px", marginLeft:"300px"}}>


    </div> <h4 style={{marginLeft:"340px" ,marginTop:"-30px"}}>Available Seats</h4><br/>
    <div className='seatbutton'style={{paddingLeft:"100px" , marginLeft:"0px"}}>
        <div className='total'style={{background:"#334",color:"white"}}>
    <h1  className='h1'>{`Total : ${booked.length*180}`}</h1><br/>
    <Button variant='contained' onClick={()=>handlesubmit()}>Book</Button>
</div> 
</div></>
 
 
 
 
 )
}

export default Seats