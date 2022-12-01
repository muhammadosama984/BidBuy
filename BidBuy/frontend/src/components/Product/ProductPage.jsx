import React, { useState, Fragment, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
    TextField,
    Typography,
    Button,
    InputAdornment,
    Box,
    CardMedia,
    IconButton,
    Stack,
    styled,
    Grid,
    Item,
    Fab,
    Divider,
    FilledInput,
    OutlinedInput

} from '@mui/material';
import image from '../../images/ip14.png'
import image2 from '../../images/bg_red.png'

import { api } from '../../App.jsx';

function ProductPage() {

    const [timeleft, settimeleft] = useState(Date.now());
    const [newBid, setnewBid] = useState("");
    const [biddingID, setbiddingID] = useState("")
    const [productID, setproductID] = useState("")
    const [Biddings, setBiddings] = useState()
    const [endtime, setendtime] = useState(Date.now())

    const updateBid = async() => {

      
       await  api.get('/getbiddingid',
         {headers : {
            auth: localStorage.getItem("token")
         },
         params:{
          product_id: productId
         }
         }
        ).then(res => {
            console.log(res.data.data);
           setendtime(res.data.data.end_time)
      
            // var data = JSON.stringify({
            //   "newBid": newBid
            // });
            
            // var config = {
            //   method: 'post',
            //   url: `http://localhost:3000/api/updatebiddings`,
            //   params:{
            //     bidding_id: res.data.data._id
            //   },
            //   headers: { 
            //     auth: localStorage.getItem("token"), 
              
            //   },
            //   data : data
            // };
            
        //  api.post("/updatebiddings",
        //  {
        //   newBid: newBid,
        // },
            
        // params:{
        //       bidding_id: res.data.data._id
        //     },
           
            
          
        //     )
        //     .then(function (response) {
        //       console.log(response.data);
        //     })
        //     .catch(function (error) {
        //       console.log(error);
        //     });
        
           
var data = JSON.stringify({
  newBid: newBid
});

var config = {
  method: 'post',
  url: `http://localhost:3000/api/updatebiddings`,
  params:{
      bidding_id : res.data.data._id
  },
  headers: { 
    auth: localStorage.getItem('token'), 
   
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

      
      
          })
    //     var config = {
    //       method: 'get',
    //       url: 'http://localhost:3000/api/getallbiddings',
    //       headers: { 
    //         auth: localStorage.getItem("token")
    //       },
          
    //     };
    //    await  axios(config)
    //     .then(function (response) {
    //     setallBiddings(response.data)
    //     console.log(response.data.data)
       
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
        
       // console.log(Biddings);

      // const filter = Biddings.filter((bids) => bids.product_id === productId);

      // console.log("filter one")
      // console.log(filter);

      
        // var data = JSON.stringify({
        //   "newBid": newBid
        // });
        
        // var config = {
        //   method: 'post',
        //   url: `http://localhost:3000/api/updatebiddings`,
        //   params:{
        //     bidding_id: Biddings
        //   },
        //   headers: { 
        //     auth: localStorage.getItem("token"), 
          
        //   },
        //   data : data
        // };
        
        // await axios(config)
        // .then(function (response) {
        //   console.log(response.data);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
        
    }

    // const getProducts = () => {
    //     api.get('/getallproducts').then(res => {
    //       //console.log(res.data.data);
    //       setproducts(res.data.data);
    
    //       // console.log(products);
    //     })
   
    const { productId } = useParams();
    const [product, setproduct] = useState({})
    const getSingleProduct = (id) => {
        api.get(`/getsingleproduct`,
        //console.log('id inside ' + id),
        {
          headers:{
            auth: localStorage.getItem("token")
          },
          params:{
            id: id
          }
        })
          .then(function (response) {
          //  console.log(response.data.data);
           // setproductID(id);
            setproduct(response.data.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      }




    useEffect(() => {
     getSingleProduct(productId);
    }, [])

    // const getSingleProduct = (id) => {
    //     api.get(`/getsingleproduct?id=${id}`)
    //     .then(res => {
    //         // console.log(res.data.data);
    //         setproduct(res.data.data);
    //         })
    // }    
    
    
    
   
    // console.log(product.name)
   // console.log('id is ' + productId);
    // console.log(product.name);
    
    const [userProfile, setuserProfile] = useState({})

    // const getProfile = () => {
    //     api.get('/getprofile', {
    //       headers:{
    //         auth: localStorage.getItem("token")
    //       }
    //     }).then(res => {
    //       console.log(res.data);
    //       setuserProfile(res.data.data);
    //     })
    //   }
    //   useEffect(() => {
    //    getProfile();
    //   }, [])


    const fontColor = {
        style: { color: 'black' }
    }
    const ProductImg = styled('img')({
        // alignItems: "center",
        // maxwidth: "100%",
        width: "50%",
        height: '600px',
        padding: '2% 0% 0% 30%',
        marginLeft: 20,
        objectFit: 'contain'
        // paddingLeft: "25%"
    });
    const styles = {
        floatingLabelFocusStyle: {
            color: "red"
        }
    }

    const timeLeft = '2';
    const price = '45';
    // String descrip = 'PTA Approved Very Good Excellent';

    return (
        <div>
            <NavBar />

            <Stack direction={'row'} justifyContent={'center'} >
                <Stack width={'60%'} justifyContent={'left'} >
                    <Box width="100%">
                        <ProductImg src={product.image} />
                    </Box>
                </Stack>
                <Stack paddingLeft={"5%"} width={'50%'} height={'700px'} direction={'column'} spacing={5} justifyContent={'center'} >
                    <Typography variant='h5' fontWeight={'bold'}>{product.name}</Typography>
                    <Typography variant='body1' fontWeight={'bold'}>Description</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        label=""
                        multiline
                        rows={5}
                        value={product.description}
                        disabled='true'
                        inputProps={fontColor}
                        sx={{ width: '50%', '& .MuiTextField-root': { color: 'black' } }}
                    />

                    <Stack width={'50%'} direction={'row'} justifyContent={'space-between'}>
                        <Typography fontWeight={'bold'}>Current Bid</Typography>
                        <Typography>$ {product.price}</Typography>
                    </Stack>
                    <Stack width={'50%'} direction={'row'} justifyContent={'space-between'}>
                        <Typography fontWeight={'bold'}>Time Left</Typography>
                        <Typography>{(Date.now()-endtime)/(1000*60*60)} hours</Typography>
                    </Stack>
                    <Stack alignItems={'center'} width={'50%'} direction={'row'} justifyContent={'space-between'}>

                        <OutlinedInput
                            id="outlined-adornment-amount"
                            // value={values.amount}
                            // onChange={handleChange('amount')}
                            type='number'
                            onChange={(event)=>{setnewBid(event.target.value)}}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label=""
                            sx={{ width: '150px', '& .MuiTextField-root': { color: 'red' } }}
                        />
                        <Button onClick={updateBid} style={{ color: 'white', backgroundColor: '#CF3D2F', fontSize: '14px', padding: '12px 20px 12px 20px' }}>
                            BID NOW
                        </Button>
                        {/* <FilledInput 
                        id="outlined-basic" 
                        label="Bid Amount" 
                        variant="outlined"  
                        sx={{'& .MuiTextField-root': {color: 'red'}}}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        /> */}
                    </Stack>
                </Stack>
            </Stack>
        </div>
    )
}

export default ProductPage
