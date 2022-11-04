import React, { useState } from 'react';
import {
  Box,
  Card,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Divider,
  Button,
} from '@mui/material';
import './NavBar.css';
import { textAlign } from '@mui/system';
import Logo from '../Logo/Logo.jsx';

// import { BiSearch } from "@react-icons/bi";
// import { BsSearch } from "react-icons/bs";
// import { GiCube } from "react-icons/gi";
// import { HiCube } from "react-icons/hi";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';

import Stack from '@mui/material/Stack';

function Header() {
  const [emailAddress, setemailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailAddress = (event) => {
    setemailAddress(event.target.value);
    console.log(emailAddress);
  }
  const handlePassword = (event) => {
    setemailAddress(event.target.value);
    console.log(emailAddress);
  }
  return (

    <div className='div_Navmain'>
    {/* <Logo /> */}
    <table>
      <th><Logo/></th>
      <th>
        <button className='btn_cat'>Categories</button>
      </th>
      <th>
        <form>
        <input type="text" className='search' placeholder="Search"></input>
        </form>
     
     </th>
    {/* <th> */}
    {/* <div className='btn_search'><BsSearch size={30} color='gray'/></div> */}
   
    {/* </th> */}
    <th>
    <Stack direction="row" spacing={2}>
      
      <Button startIcon = {<FeaturedPlayListRoundedIcon style={{ color: 'red' }} fontSize='small'/>} style={{ color: 'black'} }>
        Orders
      </Button>
      <Button startIcon = {<FavoriteIcon style={{ color: 'red' }}/>} style={{ color: 'black' }}>
        Favourites
      </Button>
      <Button startIcon = {<ShoppingCartIcon style={{ color: 'red' }} />} style={{ color: 'black' }}>
        Cart
      </Button>
    </Stack>
      {/* <div className='divBtn_flex'>
        <div style={{flex:'0 0 50vw'}}>
        <HiCube color='red' size={30}/>
        </div>
        <div style={{flex:'0 0 50vw'}}>
        <button className='btn_trans'>Orders</button>
        </div>
      </div>
       */}

      {/* <button className='btn_trans'>Orders</button>
    </th>
    <th>
    <button className='btn_trans'>Favourites</button>
    </th>

    <th>
    <button className='btn_trans'>Cart</button> */}
    </th>
    <th>
    <button className='btn_cat'>Sign Out</button>
    </th>
    
    </table>
    <ul>
      <li><a href="#home"><Button startIcon = {<LocationOnIcon style={{ color: 'red' }} />} style={{ color: 'black' }}>
        Karachi
      </Button></a></li>
      <li><a href="#news">Home</a></li>
      <li><a href="#contact">My Profile</a></li>
      <li><a href="#about">My Auctions</a></li>
      <li><a href="#about">My  Bids</a></li>
      <li><a href="#about">Contact Us</a></li>
      <li><a href="#about"><b>Sell Now</b></a></li>
    </ul>

    {/* <Stack direction="row" spacing={2}>
      
      <Button startIcon = {<LocationOnIcon style={{ color: 'red' }}/>} style={{ color: 'black' }}>
        Orders
      </Button>
      <Button startIcon = {<FavoriteIcon style={{ color: 'red' }}/>} style={{ color: 'black' }}>
        Favourites
      </Button>
      <Button startIcon = {<ShoppingCartIcon style={{ color: 'red' }} />} style={{ color: 'black' }}>
        Cart
      </Button>
    </Stack> */}

    </div>

  )
}

export default Header