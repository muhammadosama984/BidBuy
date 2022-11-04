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
import './MyProfile.css';
import { textAlign } from '@mui/system';
import Logo from '../Logo/Logo.jsx';
import NavBar from '../NavBar/NavBar'

// import { BiSearch } from "@react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { GiCube } from "react-icons/gi";
import { HiCube } from "react-icons/hi";

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
    <div>
    <NavBar/>

    <center>
    <div>
 
      <h1>My Profile</h1>
      <h2>Muhammad Ahmed</h2>
      
     
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      </div>
      <div>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Contact Number" variant="outlined" />
      </div>
      <div>
      <TextField id="outlined-basic" label="Address" variant="outlined" />
      <TextField id="outlined-basic" label="City" variant="outlined" />
      </div>
      <div>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <TextField id="outlined-basic" label="Country" variant="outlined" />
      </div>
      <div>
      <Button size ='large' variant="outlined">Edit</Button>
      
      <Button size ='large' variant="contained">Saved</Button>
      
      </div>
    </Box>
  
    </div>
    </center>

    </div>



  )
}

export default Header