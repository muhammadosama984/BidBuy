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
import { useState, useEffect } from 'react'
import { api } from '../../App';
// import { Stack } from '@mui/system';

function CardProduct(props) {
    // console.log('card'+ props.favoritesId);
    // const { productId } = props.favoritesId;
    // console.log('Dear' + productId)
    const [product, setproduct] = useState({})
    const getSingleProduct = (id) => {
        console.log('id inside ' + id)
       
        api.get(`/getsingleproduct`,
        {
          headers:{
            auth: localStorage.getItem("token")
          },
          params:{
            id: id
          }
        })
          .then(function (response) {
            console.log(response.data.data);
            setproduct(response.data.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      useEffect(() => {
        getSingleProduct(props.favoritesId);
        // console.log('useEffect in Card')
       }, [])
   

    const Img = styled('img')({
        alignItems: "center",
        maxwidth: "100%",
        height: 120,
        padding: 0,
        marginLeft: '25%'
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
                <Img src={product.image}></Img>

            </CardMedia>
            <CardContent>

                {/* <h1>{props.favoritesId}</h1> */}
                {/* <FavoriteIcon style={{ color: 'red' }} /> */}
                <Typography variant="body2" color="black" sx={{ '&. MuiTypography-root': { color: 'black', padding: 2 } }} fontSize={14}>
                    {product && product.name}
                </Typography>

                <Stack direction="row" spacing={2} justifyContent='space-between' alignItems={"center"}>
                    <Typography variant="body2" color="black" fontWeight={"bold"} fontSize={14}>
                    $ {product && product.price}
                    </Typography>
                    <Typography variant="body2" color="black" fontSize={12}>
                        3 Bids
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent='space-between' alignItems={"center"}>
                    <Typography variant="body2" color="black" fontSize={12}>
                    {product && product.description}
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