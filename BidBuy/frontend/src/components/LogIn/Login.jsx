import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingIcons from 'react-loading-icons'
import {
  Box,
  Card,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  OutlinedInput,
  Divider,
  Button,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import './Login.css';
import { textAlign } from '@mui/system';
import Logo from '../Logo/Logo.jsx';
import axios from 'axios';
import BigRedbtn from '../BigRedbtn/BigRedbtn';
import Signup from '../Signup/Signup.jsx';
import { api } from '../../App.jsx';




function Login() {
  // new password hide
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setPassword(event.target.value);
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // new




  const [showPassword, setShowPassword] = useState(false);
  const [showError, setshowError] = useState(false);
  const [showLoading, setshowLoading] = useState(false);
  // const handleClickShowPassword = () => setShowPassword(!showPassword);
  let navigate = useNavigate();
  const [emailAddress, setemailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    setshowLoading(true);
   
    await api.post('/login', {
      username: emailAddress,
      password: password
    })
      .then(function (response) {
        setshowLoading(false);
        console.log(response.data);

        if (response.data.statusCode === 200) {
          //console.log(response.data);
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('userID', response.data.data.userId);
          navigate( '/profile', { name: "Osama" });
        }
        if (response.data.statusCode !== 200) {
          setshowError(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //   const handleEmailAddress = (event) => {
  //       setemailAddress(event.target.value);
  //       console.log(emailAddress);
  //   }
  //   const handlePassword = (event) => {
  //     setemailAddress(event.target.value);
  //     console.log(emailAddress);
  // }
  return (


    <div className='div_main'>

      <div className='div_signIn'>

        {/* logo */}
        <div >
          <Logo />
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
                <TextField fullWidth
                  value={emailAddress} onChange={(event) => { setemailAddress(event.target.value) }} type="String" label="" id="fullWidth"
                  inputProps={
                    { sx: { height: "2vh", textAlign: 'left', fontSize: '2.5vh', color: 'black', opacity: "1" } }


                  } placeholder="Email Address" />
              </Box>

              <Box
                sx={{
                  width: '50%',
                  maxWidth: '100%',
                  height: '65px'
                }}
              >


{/* 
                <TextField fullWidth alue={password}
                  type={showPassword ? "text" : "password"} 
                  onChange={(event) => { setPassword(event.target.value) }}
                  label=""
                  id="fullWidth"
                  inputProps={{
                    sx: { height: "2vh", textAlign: 'left', fontSize: '2.5vh', color: 'black' },
                  }} placeholder="Password" /> */}

                {/* new */}

                <OutlinedInput
                  id="outlined-adornment-password"

                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }

                  inputProps={{
                    sx: { height: "2vh", textAlign: 'left', fontSize: '2.5vh', color: 'black', },



                  }} placeholder="Password"
                  label=""
                  fullWidth= "true"
                />

                {/* new */}




                <div className='btn_forgot'>
                  <Button variant="text" href='' onClick={() => { navigate('/signup') }} style={{ color: 'black', fontWeight: "bold", fontSize: "1.5vh", fontFamily: "microsoft yahei", textTransform: 'none' }}>Forgot Password?</Button>
                </div>
              </Box>


            </div>

            <div style={{ height: "4vh" }}>

            </div>

            <h6 className='show-login-error'>{showError ? "Please write correct Email and Password" : <></>}</h6>
            <div>
              <button onClick={handleSignIn} className='btn_SignIn'>{showLoading ? <center><div className="loading-spinner">
              </div></center> : "Sign In"}</button>
              {/* <BigRedbtn onClick={handleSignIn} name="Sign In"/> */}
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
              <p style={{ color: 'black', fontSize: "1.5vh", fontFamily: "microsoft yahei" }}>Dont have an account? <Button variant="text" onClick={() => { navigate('/signup') }} style={{ color: '#CF3D2F', padding: "0", fontSize: "1.5vh", fontFamily: "microsoft yahei", fontWeight: "bold", textTransform: 'none', marginBottom: "0.5vh" }}>Sign Up</Button></p>
            </div>
          </div>
        </center>

      </div>






      <div className='div_redContainer'>

        <div>
          <h1 className='newHere_heading'>New Here?</h1>
          <p className='txt_startSelling'>Sign up and start selling!</p>
          <center>
            <button onClick={() => { navigate('/signup') }} id="btn_signUp">Sign Up</button>
          </center>
        </div>
      </div>
    </div>
  )
}

export default Login