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
    <div>
        <h2> Welcome Back</h2>
        <h4>  Sign in to your account</h4>
        <div> 
            <TextField id="standard-basic" label="Email Address" variant="standard" />
        <br/>
            <TextField id="standard-basic" label="Password" variant="standard" />
        </div>
        <Button>Forget Password</Button>
        <Button className='sign-in' variant="contained">Sign In</Button>
        <div>
            OR
            <br/>
            <Button className='sign-in' variant="contained">Sign in with Google</Button>
        </div>
        <div>
            <p>Dont have an account?<Button variant="text" style={{color: 'red'}}>Sign Up</Button></p>  
        </div>
        <div className='red-container'> Hello</div>
    </div>
  )
}

export default Login