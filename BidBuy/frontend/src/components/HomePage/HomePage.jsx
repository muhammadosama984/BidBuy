import React from 'react'
import { useState, useEffect } from 'react'
import { api } from '../../App.jsx'
import NavBar from '../NavBar/NavBar'
import CardGrid from './CardGrid.jsx'
import CardProduct from './CardProduct.jsx'
import HeadingText from './HeadingText.jsx'
import bannerOne from '../../images/iphone-x-banner.png'
import IndividualFilteredProduct from './IndividualFilteredProduct.jsx'
import {
  Box,
  Card,
  CircularProgress,
  CardContent,
  Typography,
  Button,
  FormControl,
  ImageList,
  Stack,
  styled,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  Divider

} from '@mui/material';
function HomePage() {
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
    api.post('/addproduct', {
      name: "OLPplpl",
      description: "This is best of the best",
      price: "3000",
      category: "mobile",
      location: "karachi"
    },
      {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then(function (response) {
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const getSingleProduct = (id) => {
    api.get(`/getsingleproduct?id=${id}`, {
      name: "OLPplpl",
      description: "This is best of the best",
      price: "3000",
      category: "mobile",
      location: "karachi"
    },
      {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then(function (response) {
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const [filteredProducts, setFillteredProducts] = useState([]);
  useEffect(() => {
    getProducts()
  }, [filteredProducts]);

  const [spans] = useState([
    { id: 'mobile', text: 'mobile' },
    { id: 'camera', text: 'camera' },
    { id: 'laptop', text: 'laptop' },
    { id: 'computerhardware', text: 'computerhardware' },
    { id: 'speaker', text: 'speaker' }
  ])
  //active class state
  const [active, setActive] = useState('')

  //category state
  const [category, setCategory] = useState('')

  const handleChange = (individualSpan) => {
    console.log("Filter")
    console.log(filteredProducts)
    setActive(individualSpan.id);
    setCategory(individualSpan.text);
    filterFunction(individualSpan.text);
  }



  // filter function
  // const filterFunction = (text) => {
  //   console.log("Hello")
  //   const filter = products.filter((products) => products.category === text);
  //   setFillteredProducts(filter);

  // }

const filterFunction = (text) => {
    console.log("Hello")
    console.log(products)
    console.log(products.category)
    console.log("Text " + text)
    console.log(products.category === text)
    console.log(products.filter((products) => products.category === text))
    const filter = products.filter((products) => products.category === text);
    setFillteredProducts(filter);


  }



  return (
    <div>
      <NavBar />

      {spans.map((individualSpan, index) => (
        <button key={index} id={individualSpan.id}
          onClick={() => handleChange(individualSpan)}
          className={individualSpan.id === active ? active : 'deactive'}
        >{individualSpan.text}</button>
      ))}
      
      <Stack direction="column" spacing={1} alignItems={"center"}>
        <Stack direction="row" spacing={1} alignItems={"center"}>

          <Stack direction="row" spacing={1} alignItems={"center"}>




          </Stack>

          <Stack direction="row" spacing={1} alignItems={"center"}>

            {filteredProducts.length > 0 && (
              <div>
             
           
                <ImageList sx={{ padding: '50px' }} cols={4} rowHeight={164}>
                {filteredProducts.map(IndividualFilteredProduct => (      

                      <CardProduct product={IndividualFilteredProduct} />

                      ))}   
                  </ImageList>
               
              </div>
            )}
            {filteredProducts.length < 1 && (
              <>
                {products.length > 0 && (
                  <ImageList sx={{ padding: '50px' }} cols={4} rowHeight={164}>
                    {products.map((product) => (

                      <CardProduct product={product} />

                    ))}
                  </ImageList>

                )}
                {products.length < 1 && (
                  <CircularProgress color="inherit" />
                )}
              </>
            )}


          </Stack>

        </Stack>
      </Stack>










      {/* <Divider />
      <Typography variant='subtitle2' color='grey' textAlign='center'>
        Copyright © 2021-2022 ADMANI Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Do not sell my personal information and AdChoice
      </Typography> */}




    </div>
  )
}

export default HomePage