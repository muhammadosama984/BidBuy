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
  import './Login.css';

function Login() {
  return (
    <center>
   
    <div className='div_main'>
        <div className='div_signIn'>
        <h2 className='welcome_heading'> Welcome Back</h2>
        <h4>  Sign in to your account</h4>
        <div> 
            <TextField id="standard-basic" label="Email Address" variant="standard" />
        <br/>
            <TextField id="standard-basic" label="Password" variant="standard" />
        </div>
        <Button>Forget Password</Button>
        <Button className='btn_signIn'>Sign In</Button>
        <div>
            OR
            <br/>
            <Button className='sign-in'>Sign in with Google</Button>
        </div>
        <div>
            <p>Dont have an account?<Button variant="text" style={{color: 'red'}}>Sign Up</Button></p>  
        </div>
        </div>
        <div className='div_redContainer'>
        <h1 className='newHere_heading'>New Here?</h1>
        <p className='txt_startSelling'>Sign Up and start selling!</p>
           </div>
      </div>
    </center>
  )
}

export default Login