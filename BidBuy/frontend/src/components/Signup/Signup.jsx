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
import Logo from '../Logo/Logo.jsx';


function Signup() {
  return (
    <div className = "div_signup">

        <Logo/>
            
            <h2 className='welcome_heading'> Welcome  </h2>
            <h4 className='welcome_signInTo'> Create a new account</h4>

        
                <TextField id="outlined-search" label="Search field" type="search" />
                <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
                />
        


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