import React, { useState, Fragment, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import UploadFile from '../Upload/upload';
import {
    TextField,
    Typography,
    Button,
    InputAdornment,
    Box,
    CardMedia,
    IconButton,
    Stack,
    styled,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
    OutlinedInput

} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import image from '../../images/ip14.png'
import image2 from '../../images/bg_red.png'

import { api } from '../../App.jsx';

function UploadProduct() {
    const [userProfile, setuserProfile] = useState({})

    // const getProfile = () => {
    //     api.get('/getprofile', {
    //         headers: {
    //             auth: localStorage.getItem("token")
    //         }
    //     }).then(res => {
    //         console.log(res.data);
    //         setuserProfile(res.data.data);
    //     })
    // }
    // useEffect(() => {
    //     getProfile();
    // }, [])


    const fontColor = {
        style: { color: 'black' }
    }
    const ProductImg = styled('img')({
        // alignItems: "center",
        // maxwidth: "100%",
        width: "70%",
        height: '600px',
        // padding: '2% 0% 0% 30%',
        border: '1px solid black',
        marginLeft: 100,
        objectFit: 'fill'
        // paddingLeft: "25%"
    });
    const styles = {
        floatingLabelFocusStyle: {
            color: "red"
        }
    }

    const timeLeft = '2';
    const price = '45';
    // String descrip = 'PTA Approved Very Good Excellent';

    return (
        <div>
            <NavBar />

            <Stack direction={'row'} justifyContent={'center'} >
                <Stack width={'50%'} justifyContent={'center'} >
                    <Box width="100%" height={'600px'} sx={{ padding: '2% 0% 0% 20%' }} >
                        {/* <ProductImg /> */}
                        <UploadFile/>
                    </Box>
                </Stack>
                <Stack paddingLeft={"5%"} width={'50%'} height={'700px'} direction={'column'} spacing={5} justifyContent={'center'} >
                    <Typography variant='h5' fontWeight={'bold'}>Title</Typography>
                    <TextField
                        id="OutlinedInput"
                        // value={values.amount}
                        // onChange={handleChange('amount')}
                        label=""
                        InputProps={{
                            placeholder: "Add a Title",
                        }}
                        sx={{ width: '50%', '& .MuiTextField-root': { color: 'red' } }}
                    />
                    <Stack direction={'row'} spacing={17}>
                        <Box sx={{ minWidth: 160 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Location"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={'karachi'}>Karachi</MenuItem>
                                    <MenuItem value={'lahore'}>Lahore</MenuItem>
                                    <MenuItem value={'islamabad'}>Islamabad</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 160 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Location"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={'mobile'}>Mobile</MenuItem>
                                    <MenuItem value={'camera'}>Camera</MenuItem>
                                    <MenuItem value={'laptop'}>Laptop</MenuItem>
                                    <MenuItem value={'computerhardware'}>PC</MenuItem>
                                    <MenuItem value={'speaker'}>Speaker</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Stack>
                    <Typography variant='body1' fontWeight={'bold'}>Description</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        label=""
                        multiline
                        rows={5}
                        value={userProfile.name}
                        // disabled = 'true'
                        inputProps={fontColor}
                        InputProps={{
                            placeholder: "Add a description",
                        }}
                        sx={{ width: '50%', '& .MuiTextField-root': { color: 'black' } }}
                    />

                    <Stack width={'50%'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography fontWeight={'bold'}>Starting Price</Typography>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            // value={values.amount}
                            // onChange={handleChange('amount')}
                            type='number'
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label=""
                            sx={{ width: '150px', '& .MuiTextField-root': { color: 'red' } }}
                        />
                    </Stack>
                    <Stack width={'50%'} alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
                        <Typography fontWeight={'bold'}>Time Period</Typography>

                        {/* NEEDS TO BE DISCUSSED */}
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            // value={values.amount}
                            // onChange={handleChange('amount')}
                            type='time'

                            label=""
                            sx={{ width: '150px', '& .MuiTextField-root': { color: 'red' } }}
                        />
                        {/* NEEDS TO BE DISCUSSED */}

                        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                label="Basic example"
                                // value={value}
                                // onChange={(newValue) => {
                                //     setValue(newValue);
                                // }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider> */}
                        {/* NEEDS TO BE DISCUSSED */}

                    </Stack>
                    <Stack alignItems={'center'} width={'50%'} direction={'row'} justifyContent={'space-between'}>

                        <Button onClick={() => { }} style={{ color: 'white', width: "100%", backgroundColor: '#CF3D2F', fontSize: '14px', padding: '12px 20px 12px 20px' }}>
                            START AUCTION
                        </Button>
                        {/* <FilledInput 
                        id="outlined-basic" 
                        label="Bid Amount" 
                        variant="outlined"  
                        sx={{'& .MuiTextField-root': {color: 'red'}}}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        /> */}
                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}

export default UploadProduct
