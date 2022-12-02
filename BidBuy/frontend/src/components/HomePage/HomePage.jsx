import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../App.jsx'
import NavBar from '../NavBar/NavBar'
import CardGrid from './CardGrid.jsx'
import CardProduct from './CardProduct.jsx'
// import Heading from '../Text/Heading'
import HeadingText from './HeadingText.jsx'
import bannerOne from '../../images/iphone-x-banner.png'
import IndividualFilteredProduct from './IndividualFilteredProduct.jsx'
import {
  Box,
  Card,
  CircularProgress,
  Select,
  MenuItem,
  CardContent,
  Typography,
  Button,
  FormControl,
  ImageList,
  Stack,
  styled,
  TextField,
  IconButton,
  InputAdornment,
  InputLabel,
  Divider

} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



function HomePage() {
  let navigate = useNavigate();
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

  

  const [filteredProducts, setFillteredProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, [filteredProducts],);

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

  //search text State
  const [searchTxt, setSearchTxt] = useState('')

  const handleChange = (individualSpan) => {
    console.log(individualSpan)
    console.log(filteredProducts)
    setActive(individualSpan.id);
    setCategory(individualSpan);
    filterFunction(individualSpan);
  }

  const handleSearch = (text)=>{
    console.log(text)
    if(text != "") {  
      searchFunction(text);
    }


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

const searchFunction = (text)=>{
  const search = products.filter((products) => products.name.toLowerCase().includes(text) )
  setFillteredProducts(search);
}



  return (
    <div>
      <NavBar />
      {/* <Heading first='All' second='Products'></Heading> */}
      <FormControl sx={{width:'120px',height: '50px' ,marginRight: '50px', marginLeft:'10%'}}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                  
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Category"
                                    // onChange={handleChange}
                                             >
                                    <MenuItem onClick={() => handleChange('')}>All</MenuItem>          
                                    <MenuItem onClick={() => handleChange('mobile')}>Phones</MenuItem>
                                    <MenuItem onClick={() => handleChange('laptop')}>Laptop</MenuItem>
                                    <MenuItem onClick={() => handleChange('camera')}>Camera</MenuItem>
                                    <MenuItem onClick={() => handleChange('computerhardware')}>PC</MenuItem>
                                    <MenuItem onClick={() => handleChange('speaker')}>Speaker</MenuItem>
                                    {/* <MenuItem onClick={() => handleChange(value)} value={'speaker'}>Speaker</MenuItem> */}
                                </Select>
                            </FormControl>
      {/* {spans.map((individualSpan, index) => (
        <button key={index} id={individualSpan.id}
          onClick={() => handleChange(individualSpan)}
          className={individualSpan.id === active ? active : 'deactive'}
        >{individualSpan.text}</button>
      ))} */}

      {/* Temporary search field */}
      
      <TextField
      sx={{width:'120px',height: '50px' ,marginRight: '50px', marginLeft:'42%'}}
      onChange={(e) => setSearchTxt((e.target.value).toLowerCase())}
      
          label=""
          InputProps={{
            sx: { height: "35px", width:"350px", fontSize: '12px', margin: 0, textAlign: 'start', p:0},
            placeholder: "Search",
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={() => handleSearch(searchTxt)}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />

      <Stack direction="column" spacing={1} alignItems={"center"}>
        <Stack direction="row" spacing={1} alignItems={"center"}>

          <Stack direction="row" spacing={1} alignItems={"center"}>




          </Stack>

          <Stack direction="row" spacing={1} alignItems={"center"}>

            {filteredProducts.length > 0 && (
              <div>
             
           
                <ImageList sx={{ padding: '50px' }} cols={4} rowHeight={164}>
                {filteredProducts.map(IndividualFilteredProduct => (      

                      <CardProduct onClick={() => { navigate('/product') }} product={IndividualFilteredProduct} />

                      ))}   
                  </ImageList>
               
              </div>
            )}
            
            {filteredProducts.length < 1 && (searchTxt != "" || category != "") && (
              <Typography variant='body1'>No Results Found</Typography>
            )}
            
            {filteredProducts.length < 1 && (
              <>
              
                {products.length > 0 && searchTxt === "" && category === "" && (
                  <ImageList sx={{ padding: '50px' }} cols={4} rowHeight={164}>
                    {products.map(product => (
                      // console.log(product.id),
                      <CardProduct url={`/product/${product._id}`} product={product} />

                    ))}
                  </ImageList>

                )}
                {products.length < 1 && (
                 <CircularProgress sx={{color: 'red', marginTop:'50px'}} />
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