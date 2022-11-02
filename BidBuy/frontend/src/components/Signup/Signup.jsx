import React from 'react'
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
  import './Signup.css';
import { textTransform } from '@mui/system';


function Signup() {
  return (
    <div>
    <SignText name="Ahmad"/>
    <SignText name="Osama"/>
    </div>
  )
}

function SignText(props){
    return (
        <div>{props.name}</div>
    )
}

export default Signup