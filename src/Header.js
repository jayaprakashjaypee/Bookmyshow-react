import React, { useEffect, useState } from "react";
import EventSeatOutlinedIcon from '@mui/icons-material/EventSeatOutlined';
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { height } from "@mui/system";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Cards from "./Cards";
import MediaCard from "./Cards";
import axios from "axios";
import { config } from "./Config";
import Logout from "./Logout";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  ///////////////////breadgrums

  //////////////////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
const [info,setinfo]=useState([]);

  const fetchdata1 = async()=>{
    try{
const get = await axios.get(`${config().api}/server/movies`, {
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
  },
});
setinfo(get.data);
    }
    catch(err){
      console.log(err);
    }

  }
  useEffect(()=>{
fetchdata1();
  },[])

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Signup</MenuItem>
      <MenuItem onClick={handleMenuClose} component={Link} to="/">
        Signin
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (<>
    <div className="Header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#334" }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              BOOKMYSHOW
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#333" }}>
          <Toolbar variant="dense">
            <div
              className="breadcrums"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb" style={{ color: "white" }}>
                  <Link
                    underline="hover"
                    style={{ color: "white" }}
                    color="inherit"
                    href="/"
                  >
                    Movies
                  </Link>
                  <Link
                    underline="hover"
                    style={{ color: "white" }}
                    color="inherit"
                    href=""
                  >
                    Stream
                  </Link>
                  <Link
                    underline="hover"
                    style={{ color: "white" }}
                    color="inherit"
                    href="/"
                  >
                    Events
                  </Link>
                  <Link
                    underline="hover"
                    style={{ color: "white" }}
                    color="inherit"
                    href="/"
                  >
                    Play
                  </Link>
                  <Link
                    underline="hover"
                    style={{ color: "white" }}
                    color="inherit"
                    href=""
                  >
                    Sport
                  </Link>
                  <Link
                    underline="hover"
                    style={{ color: "white" }}
                    color="inherit"
                    href="/"
                  >
                    Activity
                  </Link>
                </Breadcrumbs>
              </div>
              <Logout/>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="caroursel" style={{ padding: "30px", height: "40px" }}>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://nlk.bmscdn.com/showcaseimage/eventimage/fast--furious-9-23-07-2021-07-57-39-017.jpg"
                class="d-block w-100"
                alt="..."
                style={{ height: "400px" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://nlk.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/top-gun-maverick-et00000972-26-01-2020-04-11-47.jpg"
                class="d-block w-100"
                alt="..."
                style={{ height: "400px" }}
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/ford_v_ferrari_mainmenu_1600x686_5b773f80.jpeg?region=0,0,1600,686"
                class="d-block w-100"
                alt="..."
                style={{ height: "400px" }}
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />
 
    </div>
     <div className="container  " style={{width:"100%",backgroundColor:"#334",marginTop:"400px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px"}}>
      {info.map((x)=>{
        return(<MediaCard theatre={x.theatre} movie={x.movie} link={x.link} time={x.time}/>)
      })}
      
     
     </div>
     </>
  );
}
