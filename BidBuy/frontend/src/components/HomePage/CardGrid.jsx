import React from 'react'
import {Link} from 'react-router-dom'
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
  CircularProgress,

} from '@mui/material';
import CardProduct from './CardProduct';
import IndividualFilteredProduct from './IndividualFilteredProduct';
import myImage from '../../images/ip14.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { maxHeight } from '@mui/system';
import { useState, useEffect } from 'react'
import { api } from '../../App';

// import { Stack } from '@mui/system';

function CardGrid(props) {
  const [products, setproducts] = useState([])
  const getProducts = () => {
    api.get('/getallproducts').then(res => {
      console.log(res.data.data);
      setproducts(res.data.data);

      // console.log(products);


    })
  }

  useEffect(() => {
    getProducts();
  }, [])

//filtered product state
const [filteredProducts, setFillteredProducts] = useState([]);


  return (
    <>
      <Stack direction="column" spacing={1} alignItems={"center"}>

        <Stack direction="row" spacing={1} alignItems={"center"}>
         
          {filteredProducts.length > 0&&(
            <IndividualFilteredProduct/>
          )}
          {filteredProducts.length < 1&&(
            <>
            {products.length > 0&&(
              <ImageList sx={{ padding: '50px' }} cols={4} rowHeight={164}>
              {products.map((product) => (
                
                <CardProduct product={product} />
  
              ))}
            </ImageList>

            )}
            {products.length<1&&(
              <CircularProgress color="inherit" />
            )}
            </>
          )}
         
          
        </Stack>
      </Stack>



    </>
  )
}

export default CardGrid