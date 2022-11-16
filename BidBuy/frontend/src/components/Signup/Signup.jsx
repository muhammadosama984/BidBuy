import React,{useState} from 'react'
import {
  Box,
  Card,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Divider,
  Button,
  Stack,
} from '@mui/material';
import './Signup.css';
import { textTransform } from '@mui/system';
import Logo from '../Logo/Logo.jsx';
import SignUpTextField from './SignUpTextField';
import DateTextField from './DateTextField';
import BigRedbtn from '../BigRedbtn/BigRedbtn';
import PasswordTextField from './PasswordTextField'

function Signup() {
  const [value, setValue] = React.useState(null);
  const [user, setuser] = useState({})
  const handleSignUp = async (key, value)=>{
    setuser({key: value})
    return(<></>);
  }
  return (
    <div className="div_signup">
      <Logo />



      <h2 className='welcome_heading'> Welcome  </h2>

      <h4 className='create_new'> Create a new account</h4>
      <center>

        <Box
          component="form"
          sx={{
            // '& .MuiTextField-root': {width: '300px', marginLeft: "0px" },
            // '& .MuiOutlinedInput-root' : {width:'300px', m: 1, paddingRight: "0px"}
          }} noValidate autoComplete="off"
        >
          <div>
            <Stack direction="row" spacing={8} justifyContent='center' alignItems={'left'} >
              <SignUpTextField name="First Name*" signup = {handleSignUp}/>
              <SignUpTextField name="Last Name*" />
            </Stack>
          </div>
          <div>
            <Stack direction="row" spacing={8} justifyContent='center' alignItems={'left'} >
              <SignUpTextField name="Email Address*" />
              <SignUpTextField name="Username*" />
            </Stack>
          </div>
          <div>
            <Stack direction="row" spacing={8} justifyContent='center' alignItems={'left'} >
              <PasswordTextField name="Create Password*" />
              <PasswordTextField  name="Confirm Password*" />
            </Stack>
          </div>
          <div>
          <Stack direction="row" spacing={6} justifyContent='center' alignItems={'left'} >
              <DateTextField name="Date of Birth*"/>
              <SignUpTextField name="Mobile Number*" />
            </Stack>
          </div>

        </Box>
          <br></br>
        <div style={{width: "800px"}}>
        <BigRedbtn name="Sign Up"/>
        </div>
        <div>
          <p style={{ color: 'black', fontSize: "1.5vh", fontFamily: "microsoft yahei" }}>Already have an account?
            <Button variant="text" style={{ color: '#CF3D2F', padding: "0", fontSize: "1.5vh", fontFamily: "microsoft yahei", fontWeight: "bold", textTransform: 'none', marginBottom: "0.5vh" }}>Sign In</Button></p>
        </div>
      </center>
    </div>
  )
}

export default Signup