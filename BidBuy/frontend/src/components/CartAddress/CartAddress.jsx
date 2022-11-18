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

import Logo from '../Logo/Logo.jsx';
import NavBar from '../NavBar/NavBar';
import Heading from '../Text/Heading';
import CardBill from '../Billing/CardBill.jsx';

function CartAddress(){

return(
  <>
      <NavBar/>
      <div style={{ height: '70px' }}>
      </div>
      <Heading first = "Your" second = "Address" />
      <Stack direction="row" spacing={10} alignItems={"center"} justifyContent={"space-around"}>
        <div>
        <div style={{ height: '100px' }} alignItems={"flex-start"} >
        Hello
        </div>
        <div>
        Hello
        </div>
        </div>
        <div>
          <CardBill/>
        </div>
      </Stack>
      
      </>
)

}

export default CartAddress
