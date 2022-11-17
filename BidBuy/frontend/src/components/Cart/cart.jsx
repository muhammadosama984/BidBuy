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

function Cart(){


return(
  <>
      <NavBar/>
      <div style={{ height: '70px' }}>
      </div>
      <Stack direction="row" spacing={10} alignItems={"center"} justifyContent={"space-evenly"}>
        <div>
        <CardCart/>
        </div>
        <div>
          Hello
        </div>
      </Stack>
      
      </>
)

}

export default Cart

