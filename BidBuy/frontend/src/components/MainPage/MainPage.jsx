import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { api } from '../../App.jsx'

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
        <Button onClick={getProducts}> Hello </Button>
       
     
    </div>
  )
}

export default MainPage