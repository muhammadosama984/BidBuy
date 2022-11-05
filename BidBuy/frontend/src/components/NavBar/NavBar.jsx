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
    

      <Stack direction="row" spacing={2} justifyContent='space-evenly' >
       <Logo />
        <button className='btn_cat'>Categories</button>
        <form>
          <input type="text" className='search' placeholder="Search"></input>
        </form>
        <Button startIcon={<FeaturedPlayListRoundedIcon style={{ color: 'red' }} fontSize='small' />} style={{ color: 'black' }}>
          Orders
        </Button>
        <Button startIcon={<FavoriteIcon style={{ color: 'red' }} />} style={{ color: 'black' }}>
          Favourites
        </Button>
        <Button startIcon={<ShoppingCartIcon style={{ color: 'red' }} />} style={{ color: 'black' }}>
          Cart
        </Button>
        <button className='btn_cat'>Sign Out</button>

      </Stack>

      <div style={{padding: '5px'}}></div>


      <Stack direction="row" spacing={12} justifyContent='space-evenly' alignItems={'center'} >

        <Button startIcon={<LocationOnIcon style={{ color: 'red' }} />} style={{ color: 'black', fontSize: '12px', }}>
          Karachi
        </Button>
        <Button style={{ color: 'black', fontSize: '12px', }}>
          Home
        </Button>

        <Button style={{ color: 'black', fontSize: '12px', }}>
          My Profile
        </Button>

        <Button style={{ color: 'black', fontSize: '12px', }}>
          My Auctions
        </Button>

        <Button style={{ color: 'black', fontSize: '12px', }}>
          My Bids
        </Button>

        <Button style={{ color: 'black', fontSize: '12px', }}>
          Contact Us
        </Button>

        <Button style={{ color: 'black', fontSize: '12px', paddingRight: '10px' }} size="small">
          Sell Now
        </Button>

      </Stack>

    </div>

  )
}

export default Header