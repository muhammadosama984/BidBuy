import React from 'react'
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Typography,
    Button,
    CardMedia,
    IconButton,
    Stack,
    styled,
    Divider

} from '@mui/material';
import myImage from '../../images/ip14.jpg';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { maxHeight } from '@mui/system';
// import { Stack } from '@mui/system';
import BigRedbtn from '../BigRedbtn/BigRedbtn';
import { useNavigate } from 'react-router-dom'; 


function AddressBill(props) {
    let navigate = useNavigate();
    return (
        <div>

            <Stack direction='column' width={'367px'} spacing={4} >
                <Stack direction={'row'} justifyContent='space-between'>
                    <Typography variant='body1' fontWeight={'bold'} >Subtotal</Typography>
                    <Typography variant='body1' >$1550</Typography>
                </Stack>

                <Divider />

                <Stack direction={'row'} justifyContent='space-between'>
                    <Typography variant='body1' fontWeight={'bold'} >Service Fee</Typography>
                    <Typography variant='body1' >$150</Typography>
                </Stack>

                <Divider />
                <Stack direction={'row'} justifyContent='space-between'>
                    <Typography variant='body1' fontWeight={'bold'} >Shipping</Typography>
                    <Typography variant='body1' >$15</Typography>
                </Stack>
                <Divider />
                <Stack direction={'row'} justifyContent='space-between'>
                    <Typography variant='body1' fontWeight={'bold'} >Total</Typography>
                    <Typography variant='body1' >$1715</Typography>
                </Stack>

                {/* <BigRedbtn name="Checkout"/> */}
                <Button onClick={() => { navigate('/login') }} style={{border: '1px solid #CF3D2F' , color: 'white', backgroundColor: '#CF3D2F', fontSize: '16px', padding: '20px 10px 20px 13px' }}>
                   Deliver
                </Button>
                
            </Stack>

        </div>
    )
}

export default AddressBill