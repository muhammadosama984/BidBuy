import React from 'react';
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

function Login() {
  return (


    <div className='div_main'>

      <div className='div_signIn'>

        {/* logo */}
        <div className='div_flex'>

          <div className='div_flexed'>
            <h1 className='red_txt'>B</h1>
          </div>

          <div className='div_flexed'>
            <h1 className='black_txt'>id</h1>
          </div>

          <div className='div_flexed'>
            <h1 className='red_txt'>B</h1>
          </div>

          <div className='div_flexed'>
            <h1 className='black_txt'>uy</h1>
          </div>

        </div>


        {/* SIGNIN FORM */}
        <center>
          <div>
            <h2 className='welcome_heading'> Welcome Back 👋🏼</h2>

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
                <TextField fullWidth label="Email Address" id="fullWidth" />
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
                <TextField fullWidth label="Password" id="fullWidth" />
              </Box>

             
            </div>
            <div className='btn_forgot'>
            <Button variant="text" style={{ color: 'black', fontWeight: "bold", fontSize: "14px",fontFamily: "microsoft yahei", textTransform: 'none' }}>Forgot Password?</Button>
            </div>

            <div>
            <button className='btn_SignIn'>Sign In</button>
            </div>



            <div>
             <p className='or'>OR</p>
             <button className='btn_Google'>
              Sign in with Google
             </button>

              {/* <Button style={{ color: 'black', fontWeight: "bold", fontSize: "16px",fontFamily: "microsoft yahei", textTransform: 'none', backgroundImage: "url(../../../images/bg_red.png)"}}>Sign in with Google</Button> */}
            </div>
            <div>
              <p style={{ color: 'black', fontSize: "16px", fontFamily: "microsoft yahei"}}>Dont have an account? <Button variant="text" style={{ color: '#CF3D2F', padding: "0", fontSize: "14px",fontFamily: "microsoft yahei", fontWeight: "bold" ,textTransform: 'none' }}>Sign Up</Button></p>
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