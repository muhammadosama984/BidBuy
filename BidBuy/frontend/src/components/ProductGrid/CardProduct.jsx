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
    Fab

} from '@mui/material';
import myImage from '../../images/ip14.jpg';
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
        <Card elevation={0} sx={{boxShadow: '0 8px 24px 0 rgba(0,0,0,0.15)', padding: 1, borderRadius: 1, border: "1px solid #e1e1e1", backgroundColor: '#FEFEFd', maxWidth: 250, backgroundColor: 'white', maxHeight: 240, width: 250 }}>
            {/* <Img  src = {myImage}/> */}
            {/* <CardMedia
                component="img"
                height="150px"
                width="100px"
                // image={props.image}
                image={myImage}
            /> */}
            <CardMedia sx = {{position: 'relative'}}>
                <FavoriteIcon sx = {{position: 'absolute', marginLeft: '90%', color: '#CF3D2F'}} />
                <Img src={myImage}  >

                </Img>


            </CardMedia>
            <CardContent>


                {/* <FavoriteIcon style={{ color: 'red' }} /> */}
                <Typography variant="body2" color="black" sx={{ '&. MuiTypography-root': { color: 'black', padding: 2 } }} fontSize={14}>
                    Iphone 14 Pro Max
                </Typography>

                <Stack direction="row" spacing={2} justifyContent='space-between' alignItems={"center"}>
                    <Typography variant="body2" color="black" fontWeight={"bold"} fontSize={14}>
                        $739
                    </Typography>
                    <Typography variant="body2" color="black" fontSize={12}>
                        3 Bids
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent='space-between' alignItems={"center"}>
                    <Typography variant="body2" color="black" fontSize={12}>
                        $39 Shipping
                    </Typography>
                    <Typography variant="body2" color="black" fontSize={12}>
                        2d 3h
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default CardProduct