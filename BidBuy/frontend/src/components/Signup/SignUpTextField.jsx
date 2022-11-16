import React, { useState }  from 'react'
import './Signup.css';
import { Grid, Stack, TextField,OutlinedInput } from '@mui/material';
import { width } from '@mui/system';


function SignUpTextField(props) {


    
    const [text, settext] = useState("");
    return (

        <Stack direction="column" spacing={0} justifyContent='space-between' alignItems={'left'} sx = {{marginLeft: "0px", '& .MuiOutlinedInput-root' : {width:'300px', m: 1, paddingRight: "0px"} }} >

            <h6 style={{ width: "300px", padding: "0", margin: 0, marginLeft: "10px", marginRight: 0, textAlign: "left", fontWeight: "500"}}>{props.name}</h6>

            <OutlinedInput required id="outlined-required" value={text} onChange={(e)=>{settext(e.target.value)}} label="" inputProps={
                { sx: { height: "2px", width: "300px", fontSize: '12px', margin: 0, textAlign: 'start', } }
            } >
            </OutlinedInput>

        </Stack>

    )
}

   

export default SignUpTextField