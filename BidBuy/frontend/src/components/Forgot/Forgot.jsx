import { Typography, Button, Stack,Box } from '@mui/material'
import React from 'react'
import Logo from '../Logo/Logo'
import ForgotTextField from './ForgotTextField'
import { useNavigate } from 'react-router-dom';
import { fontWeight, textTransform } from '@mui/system';

function Contact() {
  let navigate = useNavigate();


  return (
    <>
    <Logo />
    <Box height="100px"/>
    <Stack direction='column' alignItems={'center'} spacing={3}>
      
      <Typography variant='h3' fontWeight="bold">
        FORGOT PASSWORD?
      </Typography>
     
      <ForgotTextField name='Enter your Email Address'></ForgotTextField>
    
      <Stack direction='row' alignItems={'center'}>
        <Typography>Rembered Something?</Typography>
        <Button onClick={() => { navigate('/login') }} sx={{textTransform: 'unset', color: 'red', fontWeight: 'bold'}}>Sign In</Button>
      </Stack>
    </Stack>
    </>
  )
}

export default Contact
