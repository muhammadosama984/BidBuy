import React from 'react'
import './Signup.css';
import { Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


function DateTextField(props) {
    const [value, setValue] = React.useState(null);
    return (

        <Stack direction="column" spacing={0} justifyContent='space-between' alignItems={'left'} >

            <h6 style={{ width: "300px", padding: "0", margin: 0, marginLeft: "10px", marginRight: 0, textAlign: "left", fontWeight: "500" }}>{props.name}</h6> 

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    required id="outlined-required"
                    inputProps={
                        { sx: { height: "2px", width: "300px", fontSize: '12px', margin: 0, textAlign: 'start' } }
                    }
                    label=""
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

        </Stack>

    )
}

export default DateTextField