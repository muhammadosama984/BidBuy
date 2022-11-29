import React, { useState, Fragment, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
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
    Grid,
    Item,
    Fab,
    Divider,
    FilledInput,
    OutlinedInput

} from '@mui/material';
import image from '../../images/ip14.png'
import image2 from '../../images/bg_red.png'

import { api } from '../../App.jsx';

function ProductPage() {
    const [userProfile, setuserProfile] = useState({})
    
    // const getProfile = () => {
    //     api.get('/getprofile', {
    //       headers:{
    //         auth: localStorage.getItem("token")
    //       }
    //     }).then(res => {
    //       console.log(res.data);
    //       setuserProfile(res.data.data);
    //     })
    //   }
    //   useEffect(() => {
    //    getProfile();
    //   }, [])


    const fontColor = {
        style: { color: 'black' }
    }
    const ProductImg = styled('img')({
        // alignItems: "center",
        // maxwidth: "100%",
        width: "60%",
        height: '600px',
        padding: '2% 0% 0% 30%',
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
                    <Box width = "100%">
                    <ProductImg src={image} />
                    </Box>
                </Stack>
                <Stack paddingLeft={"5%"} width={'50%'} height={'700px'} direction={'column'} spacing={5} justifyContent={'center'} >
                    <Typography variant='h5' fontWeight={'bold'}>Apple Iphone 14  pro</Typography>
                    <Typography variant='body1' fontWeight={'bold'}>Description</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        label=""
                        multiline
                        rows={5}
                        value = {userProfile.name}
                        disabled = 'true'
                        inputProps={fontColor}
                        sx={{ width: '50%', '& .MuiTextField-root': { color: 'black' } }}
                    />

                    <Stack width={'50%'} direction={'row'} justifyContent={'space-between'}>
                        <Typography fontWeight={'bold'}>Current Bid</Typography>
                        <Typography>$ {price}</Typography>
                    </Stack>
                    <Stack width={'50%'} direction={'row'} justifyContent={'space-between'}>
                        <Typography fontWeight={'bold'}>Time Left</Typography>
                        <Typography>{timeLeft} days</Typography>
                    </Stack>
                    <Stack alignItems={'center'} width={'50%'} direction={'row'} justifyContent={'space-between'}>

                        <OutlinedInput
                            id="outlined-adornment-amount"
                            // value={values.amount}
                            // onChange={handleChange('amount')}
                            type='number'
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label=""
                            sx={{ width: '150px', '& .MuiTextField-root': { color: 'red' } }}
                        />
                        <Button onClick={() => { }} style={{ color: 'white', backgroundColor: '#CF3D2F', fontSize: '14px', padding: '12px 20px 12px 20px' }}>
                            BID NOW
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

export default ProductPage
