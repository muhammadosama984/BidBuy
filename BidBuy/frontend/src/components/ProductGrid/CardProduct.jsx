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
import myImage from '../../images/ip14.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { maxHeight } from '@mui/system';
// import { Stack } from '@mui/system';

function CardProduct(props) {
    const Img = styled('img')({
        alignItems: "center",
        maxwidth: "100%",
        height: 150,
        padding: 0,
        marginLeft: '20%'
        // paddingLeft: "25%"

    });
    return (
        <Card sx={{ maxWidth: 250, backgroundColor: 'white', maxHeight: 240, width: 250 }}>
            {/* <Img  src = {myImage}/> */}
            {/* <CardMedia
                component="img"
                height="150px"
                width="100px"
                // image={props.image}
                image={myImage}
            /> */}
            <CardMedia>
            <Img  src = {myImage}/>
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
                <Typography variant="body2" color="text.secondary" sx= {{ '&. MuiTypography-root': {color: 'black'}}}>
                    Iphone 14 Pro Max
                </Typography>
                <Stack direction="row" spacing={2} justifyContent='space-between' alignItems={"center"}>
                <Typography variant="body2" color="text.secondary" fontWeight={"bold"}>
                    $739
                </Typography>
                <Typography variant="body2" color="text.secondary" fontSize={13}>
                    3 Bids
                </Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent='space-between' alignItems={"center"}>
                <Typography variant="body2" color="text.secondary" fontSize={12}>
                    $39 Shipping
                </Typography>
                <Typography variant="body2" color="text.secondary" fontSize={12}>
                    2d 3h
                </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default CardProduct