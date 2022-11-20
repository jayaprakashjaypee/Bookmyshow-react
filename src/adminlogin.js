import TextareaAutosize from '@mui/material/TextareaAutosize';
import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Formik, useFormik } from "formik";
import { config } from './Config';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import { AppBar, Toolbar,Typography } from '@mui/material';

function App() {
  
const formik = useFormik({
  initialValues : {
    movie : "",
    theatre:"",
    time:"",
    description:"",
    link:""
  },
  onSubmit : async(values)=>{
    try{
await axios.post(`${config().api}/server/movies`,values, {
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
});
alert("Movie added successfully");
fetchdata();
    }
    catch(err){
      console.log(err);
    }

  }
})
const [movies,setmovies]=useState([])
const fetchdata = async()=>{
  const movie = await axios.get(`${config().api}/server/movies`, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
setmovies(movie.data);
}
useEffect(()=>{
fetchdata();
},[])

const handledelete=async(movieid)=>{
  try{
  const deletemovie = await axios.delete(`${config().api}/server/movies/${movieid}`, {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
alert(deletemovie.data);
fetchdata();
  }
  catch(err){
    console.log(err);
  }

}
const navigate = useNavigate();
const logout = ()=>{
  localStorage.removeItem("userid");
  localStorage.removeItem("token");
  navigate("/");

}
 

  return (
    <div >
     <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static"  style={{ background: "#334" }}>
        <Toolbar >
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BOOKMYSHOW
          </Typography>
         <Logout/>
        </Toolbar>
      </AppBar>
    </Box>

      <Formik 
        // initialValues={formData}
        // validate={validateForm}
        // onSubmit={handleSubmit}
        // enableReinitialize={true}
      >
        

          
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
           onSubmit={formik.handleSubmit}
          >
            <TextField
             style={{width:"700px"}}
              id="name"
              name="movie"
              label="Moviename"
              variant="outlined"
             value={formik.values.movie}
              onChange={formik.handleChange}
            
            />
            <br />
            {/* <span style={{ color: "red" }}>{touched.Moviename && errors.Moviename}</span> */}
            <br />

            <TextField
             style={{width:"700px"}}
              id="genre"
              name="genre"
              label="genre"
              variant="outlined"
             value={formik.values.genre}
              onChange={formik.handleChange}
            
            />
            <br />
            {/* <span style={{ color: "red" }}>{touched.genre && errors.genre}</span> */}
            <br />

            <TextField fullWidth 
             style={{width:"700px"}}
            label="link" 
            id="link"
            name="link"
            variant="outlined"
             value={formik.values.link}
            onChange={formik.handleChange}
            // onBlur={handleBlur}
            
            /> <br />
            {/* <span style={{ color: "red" }}>{touched.link && errors.link}</span> */}
            <br />


            <TextField
             style={{width:"700px"}}
              id="time"
              name="time"
              label="time"
              variant="outlined"
             value={formik.values.time}
              onChange={formik.handleChange}
            //   onBlur={handleBlur}
            />
            <br />
            {/* <span style={{ color: "red" }}>{touched.time && errors.time}</span> */}
            <br />


      
            <TextField
            style={{width:"700px"}}
              id="Theatername"
              name="theatre"
              label="Theatername"
              variant="outlined"
               value={formik.values.theatre}
              onChange={formik.handleChange}
              // onBlur={handleBlur}
            />
            <br />
            {/* <span style={{ color: "red" }}> */}
              {/* {touched.Theatername && errors.Theatername} */}
            {/* </span> */}
            <br />


            <TextareaAutosize
      aria-label="description"
      name='description'
      value={formik.values.description}
      
      placeholder="MovieDescription"
      style={{width:"700px"}}
      id="description"
      label="description"
      variant="outlined"
      // value={formik.values.Description}
      onChange={formik.handleChange}
      // onBlur={handleBlur}
    />


            {/* <TextField
            style={{width:"700px"}}
              id="Description"
              label="Description"
              variant="outlined"
               value={values.Description}
              onChange={handleChange}
              onBlur={handleBlur}
            /> */}
            <br />
            {/* <span style={{ color: "red" }}> */}
              {/* {touched.Description && errors.Description} */}
            {/* </span> */}
            <br />
    
    

            
           
            <Button variant="contained" type="submit" >
              Save
            </Button>
           
          </Box>
          
        
        
      </Formik>
     

      <h3>Admin Data</h3><br/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              
              <TableCell align="Left">Moviename</TableCell>
              <TableCell align="Left">Link</TableCell>
              <TableCell align="Left">Genres</TableCell>
              <TableCell align="Left">Theatername</TableCell>
              <TableCell align="Left">Description</TableCell>
              <TableCell align="Left">Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             
              {movies.map((x)=>{
                return(<TableRow >
                 
                   
                 
                  <TableCell align="Left">{x.movie}</TableCell>
                  <TableCell align="Left">{x.link}</TableCell>
                  <TableCell align="Left">{x.genre}</TableCell>
                  <TableCell align="Left">{x.theatre}</TableCell>
                  <TableCell align="Left">{x.description}</TableCell>
                  <TableCell align="Left">{x.time}</TableCell>
                  
                  
                  <TableCell>
                    
                    <Button onClick={()=>{handledelete(x._id)}} variant="text">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>)
              })}
            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;