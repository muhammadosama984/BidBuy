import { Button } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { api } from '../../App.jsx'
import NavBar from '../NavBar/NavBar'
import CardGrid from '../ProductGrid/CardGrid.jsx'
import Heading from '../Text/Heading.jsx'
import myImage from '../../images/ip14.jpg'
import { Stack } from '@mui/system'

function MyBids() {
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
      <Heading first = "My" second = "Bids" />
      <CardGrid/>

    </div>
  )
}

export default MyBids