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
import './cart.css';
import Logo from '../Logo/Logo.jsx';
import NavBar from '../NavBar/NavBar';
import CardCart from '../CartGrid/CardCart';
import Heading from '../Text/Heading';

function Cart(){


return(
  <>
      <NavBar/>
      <div style={{ height: '70px' }}>
      </div>
      <Heading first = "My" second = "Cart" />
      <Stack direction="row" spacing={10} alignItems={"center"} justifyContent={"space-around"}>
        <div>
        <div style={{ height: '100px' }} alignItems={"flex-start"} >
        <CardCart/>
        </div>
        <div>
        <CardCart/>
        </div>
        </div>
        <div>
          Hello
        </div>
      </Stack>
      
      </>
)

}

export default Cart

