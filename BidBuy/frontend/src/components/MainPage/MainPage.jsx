import React from 'react'
import { useState, useEffect } from 'react'
import { api } from '../../App.jsx'
import NavBar from '../NavBar/NavBar'
import CardGrid from '../ProductGrid/CardGrid.jsx'
import Heading from '../Text/Heading.jsx'
import bannerOne from '../../images/iphone-x-banner.png'
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

function MainPage() {

  const Banner = styled('img')({
    alignItems: "center",
    maxwidth: "80%",
    width: "80%",
    height: '300px',
    padding: 0,
    marginTop: 0,
    objectPosition: '80% 20%',
    objectFit: 'contain'
    // paddingLeft: "25%"

  });

  const [products, setproducts] = useState([])
  let double = [];
  const getProducts = () => {
    api.get('/getallproducts').then(res => {
      //console.log(res.data.data);
      setproducts(res.data.data);

      // console.log(products);


    })
  }
  const postProducts = () => {
    api.post('/login', {
      username: "MuhammadOsamaAsif9844",
      password: "osama123456"
    })
      .then(function (response) {
        console.log(response.data.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // useEffect(() => {
  //  getProducts()
  // }, [])

  return (
    <div>
      <NavBar />
      {/* <Button onClick={getProducts}>Hello</Button>
      <h3>{products.length === 0 ? <></> : products[0].name}</h3> */}
      <Stack direction='column' alignItems={'center'}>
        <Banner src={bannerOne}  >

        </Banner>
      </Stack>

    </div>
  )
}

export default MainPage