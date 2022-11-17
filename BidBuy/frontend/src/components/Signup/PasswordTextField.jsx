import React, { useState } from 'react'
import './Signup.css';
import {
  Stack, 
  TextField,
  InputAdornment,
  OutlinedInput,
  IconButton,
 } 
  from '@mui/material';
import { width } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function PasswordTextField(props) {
 
  const onChange = (event)=>{
      settext(event.target.value)
      props.signup(text);
    }

  // hide password
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    props.signup(values.password);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // hide password end






  const [text, settext] = useState("");





  return (

    <Stack direction="column" spacing={0} justifyContent='space-between' alignItems={'left'} sx = {{marginLeft: "0px", '& .MuiOutlinedInput-root' : {width:'300px', m: 1, paddingRight: "0px"} }}>

      <h6 style={{ width: "300px", padding: "0", margin: 0, marginLeft: "10px", marginRight: 0, textAlign: "left", fontWeight: "500" }}>{props.name}</h6>

      {/* <TextField required id="outlined-required"
      type={values.showPassword ? 'text' : 'password'}
      value={values.password}
      
      // value={text} 
      onChange={(e) => { settext(e.target.value) }} 
      label=""
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            // margin = "0"
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      inputProps={
        { sx: { height: "2px", width: "300px", fontSize: '12px', margin: 0, textAlign: 'start' } }
      } >
      </TextField> */}

      <OutlinedInput
        id="outlined-required"
        
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
             margin = "1"
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              // edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        inputProps={
          { sx: { height: "2px", width: "300px", fontSize: '12px', margin: 0, textAlign: 'start',  } }
        }
        label=""
      // fullWidth="true"
      />


    </Stack>

  )
}

export default PasswordTextField