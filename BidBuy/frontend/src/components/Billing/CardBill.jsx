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
    styled

} from '@mui/material';
import myImage from '../../images/ip14.jpg';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { maxHeight } from '@mui/system';
// import { Stack } from '@mui/system';
import BigRedbtn from '../BigRedbtn/BigRedbtn';

function CardBill(props) {
    const Img = styled('img')({
        alignItems: "center",
        maxwidth: "100%",
        height: 75,
        padding: 5,
        paddingLeft:'10%'
        // paddingLeft: "25%"

    });
    return (
        <div>
        <Card elevation={0} sx={{ maxWidth: 350, backgroundColor: 'white', justifyContent:'space-around' , maxHeight: 240, width: 350, display: 'flex'}}>
            

            <Box sx={{ display: 'flex', flexDirection: 'row' }}>

            <CardContent>
                
                <Typography variant="body2" color="black" fontWeight={"bold"} fontSize={12} sx= {{ '&. MuiTypography-root': {color: 'black'}}}>
                    Subtotal
                </Typography>
                <Typography variant="body2" color="black" fontWeight={"bold"} fontSize={12} sx= {{ '&. MuiTypography-root': {color: 'black'}}}>
                    Service Fee
                </Typography>
                <Typography variant="body2" color="black" fontWeight={"bold"} fontSize={12} sx= {{ '&. MuiTypography-root': {color: 'black'}}}>
                    Shipping
                </Typography>
                <Typography variant="body2" color="black" fontWeight={"bold"} fontSize={12} sx= {{ '&. MuiTypography-root': {color: 'black'}}}>
                    Total
                </Typography>
            </CardContent>

            <CardContent> 
                    <Typography variant="body2" color="black" fontSize={12}>
                        $760
                    </Typography>  
                    <Typography variant="body2" color="black" fontSize={12}>
                        $100
                    </Typography>   
                    <Typography variant="body2" color="black" fontSize={12}>
                        $39
                    </Typography>  
                    <Typography variant="body2" color="black" fontSize={12}>
                        $899
                    </Typography>  
            </CardContent>

            </Box>

            
        </Card>
        <BigRedbtn name="Checkout"/>
        </div>
    )
}

export default CardBill