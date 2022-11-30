import { Button } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { api } from '../../App.jsx'
import NavBar from '../NavBar/NavBar'
import CardGrid from './CardGrid.jsx'
import Heading from '../Text/Heading.jsx'
import myImage from '../../images/ip14.jpg'
import { Stack } from '@mui/system'

function MyAuctions() {
  const [products, setproducts] = useState([])
  let double = [];
  const getProducts = () => {
    api.get('/getallproducts').then(res => {
      //console.log(res.data.data);
      setproducts(res.data.data);

      // console.log(products);


    })
  }
  const [filteredProducts, setFillteredProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, [filteredProducts],);

  const handleChange = (individualSpan) => {
    console.log("Filter")
    console.log(filteredProducts)
    filterFunction(individualSpan.text);
  }


  const filterFunction = (userId) => {
    // console.log("Hello")
    // console.log(products)
    // console.log(products.category)
    // console.log("Text " + text)
    // console.log(products.category === text)
    // console.log(products.filter((products) => products.id === localStorage.getItem('userID')))
    const filter = products.filter((products) => products.id === localStorage.getItem('userID'));
    setFillteredProducts(filter);
    console.log(filteredProducts)
  }

  return (
    <div>
      <NavBar />
      {/* <Button onClick={getProducts}>Hello</Button>
      <h3>{products.length === 0 ? <></> : products[0].name}</h3> */}
      <Heading first = "My" second = "Auctions" />
      <CardGrid/>

    </div>
  )
}

export default MyAuctions