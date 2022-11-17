import React, { useState, Fragment, useEffect } from 'react';
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
  FormControl,
  InputLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './MyProfile.css';
import { textAlign } from '@mui/system';
import Logo from '../Logo/Logo.jsx';
import NavBar from '../NavBar/NavBar'
import { api } from '../../App.jsx';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // backgroundColor: 'pink',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  paddingLeft: '30px',
  boxShadow: 'none'
  //color: theme.palette.text.secondary,
}));

function Header() {
  
  const [emailAddress, setemailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setuserProfile] = useState({})

  const handleEmailAddress = (event) => {
    setemailAddress(event.target.value);
    console.log(emailAddress);
  }
  const handlePassword = (event) => {
    setemailAddress(event.target.value);
    console.log(emailAddress);
  }
  const getProfile = () => {
    api.get('/getprofile', {
      headers:{
        auth: localStorage.getItem("token")
      }
    }).then(res => {
      console.log(res.data);
      setuserProfile(res.data.data);


    })
  }
  useEffect(() => {
    
   getProfile();
    
  }, [])
  
  return (
    <>
      
      <NavBar />
      <Grid  display='flex'  container direction='column' sx={{ p: 5 }} xs={12}>

        <Grid display='flex' sx={{ flexDirection: 'column', p: 1, marginLeft: 7 }} xs={8}>
          <Box container display='flex'
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, },


              flexDirection: 'column',

            }}
            noValidate
            autoComplete="off"
          >
            <Stack direction="row">


              <Box
              sx={{ height: '100px', width: '100px', backgroundColor: '#e0e0e0', borderRadius: '10vw' }}
              >
              </Box>

              <Stack direction="column">
              <Box sx={{ height: '15px' }}></Box>
              
                <Stack direction="row" spacing={1}>
                  <Typography variant='h5' sx={{ fontFamily: 'microsoft yahei', fontWeight: 'bold', marginLeft: 1.2, color: '#CF3D2F' }}>My</Typography>
                  <Typography variant='h5' sx={{ fontFamily: 'microsoft yahei', fontWeight: 'bold' }}>Profile</Typography>


                </Stack>
                
              <Box sx={{ height: '10px' }}></Box>
                <Typography variant='h5' sx={{ fontFamily: 'microsoft yahei', fontWeight: 'bold', marginLeft: 1.2 }}>{userProfile.name}</Typography>
                {/* <Box sx={{ height: '10px' }}></Box> */}
              </Stack>
            </Stack>

            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '35ch' },
              }} noValidate autoComplete="off"
            >
              <div>
                <TextField value={userProfile.name} required id="outlined-required"  />
                <TextField required id="outlined-required" label="Last Name" />
              </div>
              <div>
                <TextField value={userProfile.email} required id="outlined-required" />
                <TextField required id="outlined-required" label="Password" />
              </div>
              <div>
                <TextField required id="outlined-required" label="Phone Number" />
                <TextField required id="outlined-required" label="Address" />
              </div>
              <div>
                <TextField required id="outlined-required" label="City" />
                <TextField required id="outlined-required" label="Country" />

              </div>



            </Box>


          </Box>
        </Grid>


      </Grid>

    </>



  )
}

export default Header