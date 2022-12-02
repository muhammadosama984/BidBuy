import React, { useState, useEffect } from 'react'
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
import CardCart from './CardCart';
import Heading from '../Text/Heading';
import CardBill from './CardBill';
import { api } from '../../App.jsx';

function Cart() {

  const BringOrders = async () => {
    
  }

  useEffect(() => {
    BringOrders();
  }, [])
  


  return (
    <>
      <NavBar />
      <Heading first="My" second="Cart" />
      <Stack direction="row" spacing={0} alignItems={"center"} justifyContent={'space-evenly'}>

        <Stack spacing={4} direction={'column'}>
          <CardCart />
          <CardCart />
          <CardCart />
        
        </Stack>


        <CardBill/>

      </Stack>

    </>
  )

}

export default Cart

