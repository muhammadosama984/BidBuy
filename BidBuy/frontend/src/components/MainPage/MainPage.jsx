import React from 'react'
import { useState, useEffect } from 'react'
import { api } from '../../App.jsx'
import NavBar from '../NavBar/NavBar'
import CardGrid from '../ProductGrid/CardGrid.jsx'
import HeadingText from './HeadingText.jsx'
import bannerOne from '../../images/iphone-x-banner.png'
import CategoryCircle from './CategoryCircle.jsx'
import FlashDeals from './FlashDeals.jsx'
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
  Grid,
  Item,
  Fab,
  Divider

} from '@mui/material';

function MainPage() {

  const Banner = styled('img')({
    alignItems: "center",
    maxwidth: "100%",
    width: "80%",
    height: '300px',
    padding: '2% 10% 0% 10%',
    marginTop: 0,
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

      <Grid container spacing={2}>
        <Grid alignItems='center' xs={12}>
        <Banner src={bannerOne} />
        </Grid>

        <Grid alignItems='center' xs={12}>
        <Box height={'30px'}/>
        </Grid>

        <Grid xs={1.6}/>
  
        <Grid xs={10.4}>
        <div style={{marginTop: '1%'}}>
        <HeadingText first="Explore" second=' by Category' />
        </div>
        </Grid>

        <Grid xs={2}/>
        <Grid alignItems='center' xs={8}>
        <CategoryCircle/>
        </Grid>
        <Grid xs={2}/>

        <Grid alignItems='center' xs={12}>
        <Box height={'30px'}/>
        </Grid>

        <Grid xs={1.6}/>
        <Grid xs={10.4}>
        <div style={{marginTop: '1%'}}>
        <HeadingText first="Flash" second=' Deals' />
        </div>
        </Grid>

        <Grid xs={2}/>
        <Grid alignItems='center' xs={8}>
        <FlashDeals/>
        </Grid>
        <Grid xs={2}/>

        <Grid alignItems='center' xs={12}>
        <Box height={'70px'}/>
        </Grid>

        <Grid alignItems='center' xs={12}>
        <Banner src={bannerOne} />
        </Grid>

        <Grid alignItems='center' xs={12}>
        <Box height={'70px'}/>
        </Grid>

        <Grid alignItems='center' xs={12}>
        <Divider/>
        </Grid>

        <Grid alignItems='center' xs={12}>
        <Box height={'40px'}/>
        </Grid>

        <Grid alignItems='center' xs={12}>
        <Typography variant='subtitle2' color='grey' textAlign='center'>
        Copyright © 2021-2022 ADMANI Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Do not sell my personal information and AdChoice
        </Typography>
        </Grid>

        <Grid alignItems='center' xs={12}>
        <Box height={'30px'}/>
        </Grid>




      </Grid>
      {/* <Stack direction='column' width='80%' paddingLeft='20%'>
        
          <Banner src={bannerOne} />
        
        <div style={{marginTop: '1%'}}>
        <Heading sx={{paddingRight: '140px'}} first="Explore" second=' by Category' />
        </div>

        
        <CategoryCircle/>

        <div style={{marginTop: '1%'}}>
        <Heading first="Flash" second=' Deals' />
        </div>

        </Stack> */}





    </div>
  )
}

export default MainPage