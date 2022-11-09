import React from 'react'
import './Signup.css';
import { Grid, Stack, TextField } from '@mui/material';
import { width } from '@mui/system';


function SignUpTextField(props) {
    return (

        <Stack direction="column" spacing={0} justifyContent='space-between' alignItems={'left'} >

            <h6 style={{ width: "300px", padding: "0", margin: 0, marginLeft: "10px", marginRight: 0, textAlign: "left", fontWeight: "500"}}>{props.name}</h6>

            <TextField required id="outlined-required" label="" inputProps={
                { sx: { height: "2px", width: "300px", fontSize: '12px', margin: 0, textAlign: 'start'} }
            } >
            </TextField>

        </Stack>

    )
}

export default SignUpTextField