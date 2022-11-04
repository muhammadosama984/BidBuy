import React from 'react'
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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './Signup.css';
import { textTransform } from '@mui/system';
import Logo from '../Logo/Logo.jsx';


function Signup() {
  const [value, setValue] = React.useState(null);

  return (
    <div className = "div_signup">
        <Logo/>

        <center>

            <h2 className='welcome_heading'> Welcome  </h2>

            <h4 className='welcome_signInTo'> Create a new account</h4>

            <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                     }} noValidate autoComplete="off" >

            <TextField  required id="outlined-required" label="First Name" />
            <TextField  required id="outlined-required" label="Username"  />
            <TextField  required id="outlined-required" label="Last Name" />
            <TextField  required id="outlined-required" label="Email Address" />
            <TextField  required id="outlined-required" label="Phone Number" />
            <TextField  required id="outlined-required" label="Password" />
    
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField  required id="outlined-required" label="Confirm Password" />

            </Box>

            <div>
            <button className='btn_SignUp'>Sign Up</button>
            </div>

         </center> 

    </div>
  )
}

export default Signup