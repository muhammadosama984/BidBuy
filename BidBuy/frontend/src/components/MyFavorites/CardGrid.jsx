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
  ImageList,
  ImageListItem,
  itemData

} from '@mui/material';
import CardProduct from './CardProduct';
import myImage from '../../images/ip14.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { maxHeight } from '@mui/system';
import { useState, useEffect } from 'react'
import { api } from '../../App';

// import { Stack } from '@mui/system';

function CardGrid(props) {

  const userID = localStorage.getItem('userID')
  // console.log(userID)

  const [product, setproduct] = useState([])

  const [favoritesId, setfavoritesId] = useState([])

  const getFavoritesId = () => {
    api.get('/myfav', {
        headers:{
          auth: localStorage.getItem("token")
        },
    })
    .then(function (response) {
      console.log(response.data.data.myFavourites);
      setfavoritesId(response.data.data.myFavourites)
      // setfavoritesId([...favoritesId, ((response.data.data.myFavourites))])
      // console.log('list ' + favoritesId)
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const getSingleProduct = (id) => {
    // console.log(favoritesId  && favoritesId[0]);  
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
          console.log('hello')
          console.log(response.data.data);
          setproduct(response.data.data)
          console.log('hello')
          
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  useEffect(() =>  {
    getFavoritesId()
    // getSingleProduct(favoritesId[0])
    
    // console.log(favoritesId)
    // for (let i = 0; i < favoritesId.length; i++){
    //   getSingleProduct(favoritesId[i])
      // console.log(product + "hereeee")
    // }
   ;
  }, [])
  return (
    <>
      <Stack direction="column" spacing={1} alignItems={"center"}>

        <Stack direction="row" spacing={1} alignItems={"center"}>
        {/* <h1>{favoritesId && favoritesId[0]}</h1> */}
        {/* <h1>{favoritesId && favoritesId[1]}</h1> */}
        
        <ImageList sx={{padding: '50px'}} cols={4} rowHeight={164}>
        {favoritesId.map((favid) => (
          <>
          {/* <h1>ADMANI{favoritesId}</h1> */}
          <CardProduct favoritesId={favid} />
          </>
        ))}
      </ImageList>

        </Stack>
        <Stack direction="row" spacing={1} alignItems={"center"}>
   
   
        </Stack>
        <Stack direction="row" spacing={1} alignItems={"center"}>
     
       
        </Stack>
      </Stack>

      

    </>
  )
}

export default CardGrid