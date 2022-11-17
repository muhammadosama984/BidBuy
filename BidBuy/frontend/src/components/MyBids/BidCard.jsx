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

function BidCard(props) {
    const Img = styled('img')({
        alignItems: "center",
        maxwidth: "100%",
        height: 150,
        padding: 0,
        marginLeft: '20%'
        // paddingLeft: "25%"

    });
    return (
        <Card elevation={0} sx={{padding: 1, borderRadius: 0, border: "1px solid #e1e1e1",  backgroundColor: '#FEFEFd' ,maxWidth: 250, backgroundColor: 'white', maxHeight: 240, width: 250 }}>
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
            <CardContent>
                {/* <CardActions sx={{alignItems: 'end'}}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions> */}
                <Typography variant="body2" fontSize={12} color="black" sx= {{ '&. MuiTypography-root': {color: 'black'}}}>
                    Iphone 14
                </Typography>
                <Stack direction="row" spacing={2} justifyContent='space-between' alignItems={"center"}>
                <Typography variant="body2" color="#CF3D2F" fontWeight={"bold"}>
                    Your Bid
                </Typography>
                <Typography variant="body2" color="#CF3D2F" fontSize={13} fontWeight={"bold"}>
                    $530
                </Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent='space-between' alignItems={"center"}>
                <Typography variant="body2" color="black" fontSize={13} fontWeight={"500"}>
                    Current Bid
                </Typography>
                <Typography variant="body2" color="black" fontSize={13} fontWeight={"500"}>
                    $830
                </Typography>
                </Stack>
                
            </CardContent>
        </Card>
    )
}

export default BidCard