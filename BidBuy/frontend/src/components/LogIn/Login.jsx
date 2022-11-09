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
import './Login.css';
import { textAlign } from '@mui/system';
import Logo from '../Logo/Logo.jsx';
import axios from 'axios';
import BigRedbtn from '../BigRedbtn/BigRedbtn';
  


function Login() {
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
const styles = {
  'input-label': {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
    color: 'red'
  },

  'input': {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'blue'
    }
  }
};
  return (


    <div className='div_main'>

      <div className='div_signIn'>

        {/* logo */}
        <div >
          <Logo/>
        </div>


        {/* SIGNIN FORM */}
        <center>
          <div>
            <h2 className='welcome_heading'> Welcome Back 👋🏼 </h2>

            <h4 className='welcome_signInTo'>  Sign in to your account</h4>

            <div>
              <Box
                sx={{
                  width: '50%',
                  maxWidth: '100%',
                  marginBottom: 3,
                 
                }}
              >
                {/* <TextField id="standard-basic" label="Email Address" variant="standard" sx={{
                  width: 450,
                  textAlign: 'center',
                  
                }}/> */}
                <TextField fullWidth value = {emailAddress} onChange={handleEmailAddress} type="String" label="" id="fullWidth" 
                inputProps={
                  { sx: { height: "2vh" , textAlign: 'left', fontSize:'2.5vh' , color: 'black', opacity: "1"} }
             
              
              } placeholder="Email Address" />
              </Box>

              <Box
                sx={{
                  width: '50%',
                  maxWidth: '100%',
                  height: '65px'
                }}
              >
                {/* <TextField id="standard-basic" label="Password" variant="standard" sx={{
                  width: 450,
                  textAlign: textAlign.center,
                  
                }}/> */}
                
                {/* <p style={{ color: 'black', fontSize: "2vh", fontFamily: "microsoft yahei", textAlign: 'left'}}>Password</p> */}
                <TextField fullWidth alue = {password} onChange={handlePassword} label="" id="fullWidth" inputProps={{ sx: { height: "2vh" , textAlign: 'left' , fontSize:'2.5vh', color: 'black'} }} placeholder="Password" />
                <div className='btn_forgot'>
                 <Button variant="text" href='' style={{ color: 'black', fontWeight: "bold", fontSize: "1.5vh",fontFamily: "microsoft yahei", textTransform: 'none'}}>Forgot Password?</Button>
                </div>
              </Box>

             
            </div>

            <div style={{height: "4vh"}}>

            </div>
            

            <div>
              <BigRedbtn name="Sign In"/>
            {/* <button className='btn_SignIn'>Sign In</button> */}
            </div>



            <div>
             <p className='or'>OR</p>
             <button className='btn_Google'>
              Sign in with Google
             </button>

              {/* <Button style={{ color: 'black', fontWeight: "bold", fontSize: "16px",fontFamily: "microsoft yahei", textTransform: 'none', backgroundImage: "url(../../../images/bg_red.png)"}}>Sign in with Google</Button> */}
            </div>
            <div>
              <p style={{ color: 'black', fontSize: "1.5vh", fontFamily: "microsoft yahei"}}>Dont have an account? <Button variant="text" style={{ color: '#CF3D2F', padding: "0", fontSize: "1.5vh",fontFamily: "microsoft yahei", fontWeight: "bold" ,textTransform: 'none', marginBottom: "0.5vh" }}>Sign Up</Button></p>
            </div>
          </div>
        </center>

      </div>






      <div className='div_redContainer'>

        <div>
          <h1 className='newHere_heading'>New Here?</h1>
          <p className='txt_startSelling'>Sign up and start selling!</p>
          <center>
            <button id="btn_signUp">Sign Up</button>
          </center>
        </div>
      </div>
    </div>
  )
}

export default Login