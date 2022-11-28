import React, { useState } from 'react'
import { Box, Stack, OutlinedInput, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function ForgotTextField(props) {
    let navigate = useNavigate();


    const [text, settext] = useState("");
    const onChange = (event) => {
        settext(event.target.value)
        props.signup(text);
    }
    return (

        <Stack direction="column" spacing={0} justifyContent='space-between' alignItems={'left'} sx={{ marginLeft: "0px", '& .MuiOutlinedInput-root': { width: '500px', m: 1, paddingRight: "0px" } }} >
            <Typography marginLeft={'10px'}>
                No worries! We will send you the reset instructions
            </Typography>
            <Box height='20px'/>

            <Typography marginLeft={'10px'}>{props.name}</Typography>
            <OutlinedInput required id="outlined-required" sx={{ border: '1px solid #E0E0E0', height: '40px', width: '400px' }} value={text} onChange={onChange} label="" inputProps={
                { sx: { height: "2px", width: "400px", fontSize: '12px', margin: 0, textAlign: 'start', } }
            } >
            </OutlinedInput>
            <Box height='20px'/>
            <Button onClick={() => { navigate('/login') }} style={{textTransform: 'unset', marginLeft:'8px', width: '500px', border: '1px solid #CF3D2F', color: 'white', backgroundColor: '#CF3D2F', fontSize: '16px', padding: '10px 10px 10px 13px' }}>
                Reset Password
            </Button>
        </Stack>

    )
}


export default ForgotTextField