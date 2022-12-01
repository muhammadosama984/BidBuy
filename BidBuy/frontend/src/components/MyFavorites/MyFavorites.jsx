import { Button } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import { api } from '../../App.jsx'
import NavBar from '../NavBar/NavBar'
import CardGrid from './CardGrid.jsx'
import Heading from '../Text/Heading.jsx'
import myImage from '../../images/ip14.jpg'
import { Stack } from '@mui/system'


function MyFavorites() {
 
  return (
    <div>
      <NavBar />
      {/* <Button onClick={getProducts}>Hello</Button>
      <h3>{products.length === 0 ? <></> : products[0].name}</h3> */}
      <Heading first = "My" second = "Favorites" />
      <CardGrid/>

    </div>
  )
}

export default MyFavorites