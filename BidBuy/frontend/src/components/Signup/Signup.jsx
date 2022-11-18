import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
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
import { api } from '../../App.jsx';
import axios from 'axios';


function Signup() {
  let navigate = useNavigate();
  const [value, setValue] = React.useState(null);
  const [user, setuser] = useState({})
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [emailAddress, setemailAddress] = useState("")
  const [username, setusername] = useState("")
  const [createpassword, setcreatepassword] = useState("")
  const [confirmpassword, setconfirmpassword] = useState("");
  const [mobilenumber, setmobilenumber] = useState("")
  
  const handleSignUp = async ()  =>{
    var sendData = {
        name: firstname,
        username: username,
        password: confirmpassword,
         email: emailAddress,
        userRole: 'User'
    }
    console.log(sendData.email)
   console.log("Osama")
   
   await api.post('/register', sendData
     )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
 
    console.log("hello");
   
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
              <SignUpTextField name="First Name*" signup = {(firstn)=>{setfirstname(firstn)}}/>
              <SignUpTextField name="Last Name*" signup = {(lastn)=>{setlastname(lastn)}}/>
            </Stack>
          </div>
          <div>
            <Stack direction="row" spacing={8} justifyContent='center' alignItems={'left'} >
              <SignUpTextField name="Email Address*" signup = {(emaila)=>{setemailAddress(emaila)}} />
              <SignUpTextField name="Username*" signup = {(usern)=>{setusername(usern)}} />
            </Stack>
          </div>
          <div>
            <Stack direction="row" spacing={8} justifyContent='center' alignItems={'left'} >
              <PasswordTextField name="Create Password*" signup = {(createp)=>{setcreatepassword(createp)}}/>
              <PasswordTextField  name="Confirm Password*" signup = {(confirmp)=>{setconfirmpassword(confirmp)}} />

            </Stack>
          </div>
          <div>
          <Stack direction="row" spacing={6} justifyContent='center' alignItems={'left'} >
              <DateTextField name="Date of Birth*" signup = {(e)=>{}} />
              <SignUpTextField name="Mobile Number*" signup = {(mobilenum)=>{setmobilenumber(mobilenum)}}/>
            </Stack>
          </div>

        </Box>
          <br></br>
        <div style={{width: "800px"}}>
        <BigRedbtn onClick = {handleSignUp} name="Sign Up"/>
        </div>
        <div>
          <p style={{ color: 'black', fontSize: "1.5vh", fontFamily: "microsoft yahei" }}>Already have an account?
            <Button variant="text" onClick={()=>{navigate('/login')}} style={{ color: '#CF3D2F', padding: "0", fontSize: "1.5vh", fontFamily: "microsoft yahei", fontWeight: "bold", textTransform: 'none', marginBottom: "0.5vh" }}>Sign In</Button></p>
        </div>
      </center>
    </div>
  )
}

export default Signup