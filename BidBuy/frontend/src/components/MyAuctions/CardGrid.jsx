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
  const [products, setproducts] = useState([])
  let double = [];

  const getProducts = () => {
    api.get('/getallproducts').then(res => {
      //console.log(res.data.data);
      setproducts(res.data.data);

      // console.log(products);


    })
  }
  // const [auctionProducts, setAuctionProducts] = useState([]);


  // const handleChange = (individualSpan) => {
  //   console.log("Filter")
  //   console.log(auctionProducts)
  //   filterFunction(localStorage.getItem('userID'));
  // }

  const [auctionProducts, setAuctionProducts] = useState([]);

  const filterFunction = (userId) => {
    console.log("Hello")
    console.log(products)
    // console.log(products.category)
    // console.log("Text " + text)
    // console.log(products.category === text)
    // console.log(products.filter((products) => products.id === localStorage.getItem('userID')))
    const filter = products.filter((products) => products.user_id === userId);
    setAuctionProducts(filter);

    console.log('sdafa' + auctionProducts)
  }



  // filterFunction(localStorage.getItem('userID'));
  const currentID = localStorage.getItem('userID') 
  useEffect(() => {
    getProducts()
    filterFunction(currentID)
  }, [auctionProducts],);

  
  return (
    <>
      <Stack direction="column" spacing={1} alignItems={"center"}>

        <Stack direction="row" spacing={1} alignItems={"center"}>
        <ImageList sx={{padding: '50px'}} cols={4} rowHeight={164}>
        {auctionProducts.map((product) => (

          <CardProduct product={product} />

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