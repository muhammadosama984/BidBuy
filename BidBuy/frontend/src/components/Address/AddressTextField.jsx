import React, { useState }  from 'react'
import {Stack,OutlinedInput, Typography } from '@mui/material';


function AddressTextField(props) {


    
    const [text, settext] = useState("");
    const onChange = (event)=>{
        settext(event.target.value)
        props.signup(text);
      }
    return (

        <Stack direction="column" spacing={0} justifyContent='space-between' alignItems={'left'} sx = {{marginLeft: "0px", '& .MuiOutlinedInput-root' : {width:'500px', m: 1, paddingRight: "0px"} }} >

            <Typography marginLeft={'10px'} fontWeight={'bold'}>{props.name}</Typography>
            <OutlinedInput required id="outlined-required" sx={{border: '1px solid #E0E0E0', height: '40px'}} value={text} onChange={onChange} label="" inputProps={
                { sx: { height: "2px", width: "300px", fontSize: '12px', margin: 0, textAlign: 'start', } }
            } >
            </OutlinedInput>

        </Stack>

    )
}

   

export default AddressTextField