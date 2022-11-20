import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';

export default function MediaCard({theatre,movie,link,time,description}) {
const navigate = useNavigate();
    const book = (moviename,theatre,time,description)=>{
        localStorage.setItem("movie",moviename);
        localStorage.setItem("theatre",theatre);
        localStorage.setItem("time",time);
        localStorage.setItem("description",description);
        navigate("/seat")
        
    }

  return (

    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="140"
        image={link}
        alt="green iguana"
      style={{Objectfit:"cover"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {theatre}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {time}
        </Typography>
        
        <Typography gutterBottom variant="h7" component="div">
        {description}
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button variant="contained" onClick={()=>{book(movie,theatre,time,description)}} size="small">Book</Button>
      </CardActions>
    </Card>
  );
}
