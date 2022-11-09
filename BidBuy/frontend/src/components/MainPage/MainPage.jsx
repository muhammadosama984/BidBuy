import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { api } from '../../App.jsx'
import NavBar from '../NavBar/NavBar'
function MainPage() {
    const [products, setproducts] = useState([])
    let double = [];
    const getProducts = () => {
        api.get('/getallproducts').then(res=>{
            setproducts([...products, res.data.data])
         
           
        })
    }
  return (
    <div>
      <NavBar/>
        <Button onClick={getProducts}> Hello </Button>
       
     
    </div>
  )
}

export default MainPage