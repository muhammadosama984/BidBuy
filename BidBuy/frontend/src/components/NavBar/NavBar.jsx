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
      <Logo />

    </div>
    
  )
}

export default Header