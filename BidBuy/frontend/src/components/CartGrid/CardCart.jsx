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

function CardCart(props) {
    const Img = styled('img')({
        alignItems: "center",
        maxwidth: "100%",
        height: 75,
        padding: 5,
        paddingLeft:'10%'
        // paddingLeft: "25%"

    });
    return (
        <Card elevation={0} sx={{ maxWidth: 350, backgroundColor: 'white', justifyContent:'space-around' , maxHeight: 240, width: 350, display: 'flex'}}>
            
            {/* <Img  src = {myImage}/> */}
            {/* <CardMedia
                component="img"
                height="150px"
                width="100px"
                // image={props.image}
                image={myImage}
            /> */}
            <CardMedia>
                <Img src = {myImage}></Img>
            </CardMedia>

            <Box sx={{ display: 'flex', flexDirection: 'row' }}>

            <CardContent >
                {/* <CardActions sx={{alignItems: 'end'}}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions> */}
                
                <Typography variant="body2" color="black" fontWeight={"bold"} fontSize={13} sx= {{ '&. MuiTypography-root': {color: 'black'}}}>
                    Iphone 14 Pro Max
                </Typography>
                <Typography variant="body2" color="black" fontSize={12} >
                    Shipping Fee
                </Typography>
                <Typography variant="body2" color="grey" fontSize={11}>
                    3 Days Remaining
                </Typography>
            </CardContent>

            <CardContent> 
                <Typography variant="body2" color="black" fontSize={13} fontWeight={"bold"}>
                        $739
                    </Typography>
                    <Typography variant="body2" color="black" fontSize={12}>
                        $39
                    </Typography>   
                    <Typography variant="body2" color="#CF3D2F" fontSize={11} fontWeight={"bold"}>
                        Pay Now
                    </Typography>
            </CardContent>

            </Box>
        </Card>
    )
}

export default CardCart