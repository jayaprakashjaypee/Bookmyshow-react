
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logout from './Logout';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Ticket() {
  return (
<>
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
    
    <Card sx={{ minWidth: 275 }} style={{width:"100px",margin:"200px"}}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Ticket id :  {localStorage.getItem("userid")}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {localStorage.getItem("theatre")}
        </Typography>
        <Typography variant="h5" component="div">
          {localStorage.getItem("movie")}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {localStorage.getItem("time")}
        </Typography>
        <Typography variant="body2">
          Check your mail for ticket
          <br />
           {/* <img
        component="img"
        height="140"
        width="140"
        image="https://www.masslive.com/resizer/hN6BgQI_K6ajXdrnFoe8ExYL828=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.masslive.com/home/mass-media/width2048/img/business-news/photo/lockerz-plixi-android-app-f88bf55f2f874ee8.jpg"
        alt="green iguana"
      /> */}
          <img style={{height:"100px",width:"100px",objectFit:"cover"}} src="https://www.masslive.com/resizer/hN6BgQI_K6ajXdrnFoe8ExYL828=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.masslive.com/home/mass-media/width2048/img/business-news/photo/lockerz-plixi-android-app-f88bf55f2f874ee8.jpg"/>
        </Typography>
      </CardContent>
     
    </Card>
    </>
  );
}