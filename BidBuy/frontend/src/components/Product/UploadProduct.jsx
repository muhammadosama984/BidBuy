import React, { useState, Fragment, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import UploadFile from '../Upload/upload';
import axios from 'axios'
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
    FormControl,
    MenuItem,
    Select,
    InputLabel,
    OutlinedInput

} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import image from '../../images/ip14.png'
import image2 from '../../images/bg_red.png'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { api } from '../../App.jsx';
import dayjs from 'dayjs';

function UploadProduct() {


    const [imageSelected, setimageSelected] = useState("");
    const [name, setname] = useState("");
    const [description, setDescription] = useState("")
    const [location, setlocation] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [value, setValue] = React.useState(Date.now());
    const [productID, setproductID] = useState("")
    const [endDate, setendDate] = useState(Date.now())


    const fontColor = {
        style: { color: 'black' }
    }
    const ProductImg = styled('img')({
        // alignItems: "center",
        // maxwidth: "100%",
        width: "70%",
        height: '600px',
        // padding: '2% 0% 0% 30%',
        border: '1px solid black',
        marginLeft: 100,
        objectFit: 'fill'
        // paddingLeft: "25%"
    });
    const styles = {
        floatingLabelFocusStyle: {
            color: "red"
        }
    }

    const timeLeft = '2';

    // String descrip = 'PTA Approved Very Good Excellent';
    const handleUploadProduct = async () => {
        let cloudinaryLink = "";
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "drb3j96q");

        await axios.post(
            "https://api.cloudinary.com/v1_1/dumnaigxr/image/upload",
            formData
        ).then((response) => {
            console.log(response.data.url);
            cloudinaryLink = response.data.url;
        })

        // data to database 

       
        await api.post('/addproduct', {
            name: name,
            description: description,
            price: price,
            category: category,
            location: location,
            image: cloudinaryLink
        },
            {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            .then(function (response) {
                console.log(response.data.data.product_id);
                setproductID(response.data.data.product_id);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log("upload done")
       
        var data = {
          "start_price": price,
          "end_time": endDate
        };
        
        var config = {
          method: 'post',
          url: `http://localhost:3000/api/startbidding?product_id=${productID}`,
          headers: { 
            auth: localStorage.getItem("token")
            
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log((response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
        


    }
    // useEffect(() => {
    //   console.log(name);
    //   console.log(price);
    //   console.log(location);
    //   console.log(category);
    //   console.log(description);
    // }, [name, price, location, category, description])

    return (
        <div>
            <NavBar />

            <Stack direction={'row'} justifyContent={'center'} >
                <Stack width={'50%'} justifyContent={'center'} >
                    <Box width="100%" height={'600px'} sx={{ padding: '2% 0% 0% 20%' }} >
                        {/* <ProductImg /> */}

                        <input type='file' accept='image/*' onChange={(event) => { setimageSelected(event.target.files[0]) }} />
                    </Box>
                </Stack>
                <Stack paddingLeft={"5%"} width={'50%'} height={'700px'} direction={'column'} spacing={5} justifyContent={'center'} >
                    <Typography variant='h5' fontWeight={'bold'}>Title</Typography>
                    <TextField
                        onChange={(title) => { setname(title.target.value) }}
                        value={name}
                        id="OutlinedInput"
                        // value={values.amount}
                        // onChange={handleChange('amount')}
                        label=""
                        InputProps={{
                            placeholder: "Add a Title",
                        }}
                        sx={{ width: '50%', '& .MuiTextField-root': { color: 'red' } }}
                    />
                    <Stack direction={'row'} spacing={17}>
                        <Box sx={{ minWidth: 160 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Location"
                                    // onChange={handleChange}
                                    onChange={(location) => { setlocation(location.target.value) }}
                                >
                                    <MenuItem value={'karachi'}>Karachi</MenuItem>
                                    <MenuItem value={'lahore'}>Lahore</MenuItem>
                                    <MenuItem value={'islamabad'}>Islamabad</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 160 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Location"
                                    // onChange={handleChange}
                                    onChange={(category) => { setcategory(category.target.value) }}
                                >
                                    <MenuItem value={'mobile'}>Mobile</MenuItem>
                                    <MenuItem value={'camera'}>Camera</MenuItem>
                                    <MenuItem value={'laptop'}>Laptop</MenuItem>
                                    <MenuItem value={'computerhardware'}>PC</MenuItem>
                                    <MenuItem value={'speaker'}>Speaker</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Stack>
                    <Typography variant='body1' fontWeight={'bold'}>Description</Typography>
                    <TextField
                        onChange={(description) => { setDescription(description.target.value) }}
                        id="outlined-multiline-static"
                        label=""
                        multiline
                        rows={5}

                        // disabled = 'true'
                        inputProps={fontColor}
                        InputProps={{
                            placeholder: "Add a description",
                        }}
                        sx={{ width: '50%', '& .MuiTextField-root': { color: 'black' } }}
                    />

                    <Stack width={'50%'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography fontWeight={'bold'}>Starting Price</Typography>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            // value={values.amount}
                            // onChange={handleChange('amount')}
                            defaultValue={0}
                            onChange={
                                (price) =>
                                    (price.target.value < 0 ? (price.target.value = 0) : price.target.value)

                                        (setprice(price.target.value))


                            }
                            type='number'
                            startAdornment={<InputAdornment position="start"> $</InputAdornment>}
                            label=""
                            sx={{ width: '150px', '& .MuiTextField-root': { color: 'red' } }}
                        />
                    </Stack>
                    <Stack width={'50%'} alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
                        <Typography fontWeight={'bold'}>Time Period (hours)</Typography>

                        {/* NEEDS TO BE DISCUSSED */}
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            defaultValue={3}
                            // onChange={handleChange('amount')}
                            type='number'
                            startAdornment={<InputAdornment position="start">H</InputAdornment>}
                            onChange={(hours) =>
                                (hours.target.value < 3
                                    ? (hours.target.value = 3)
                                    : hours.target.value)
                                    (hours.target.value > 72
                                        ? (hours.target.value = 72)
                                        : hours.target.value)
                            }

                            label=""
                            sx={{ width: '150px', '& .MuiTextField-root': { color: 'red' } }}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="End Time"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                    // console.log(newValue)
                                   
                                    setendDate(new Date(newValue.$d));
                                    // console.log(d1);
                                    // d1> Date.now()? console.log("bigger"): console.log("smaller")
                                }}
                            />
                        </LocalizationProvider>
                        {/* NEEDS TO BE DISCUSSED */}

                        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                label="Basic example"
                                // value={value}
                                // onChange={(newValue) => {
                                //     setValue(newValue);
                                // }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider> */}
                        {/* NEEDS TO BE DISCUSSED */}

                    </Stack>
                    <Stack alignItems={'center'} width={'50%'} direction={'row'} justifyContent={'space-between'}>

                        <Button onClick={handleUploadProduct} style={{ color: 'white', width: "100%", backgroundColor: '#CF3D2F', fontSize: '14px', padding: '12px 20px 12px 20px' }}>
                            START AUCTION
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

export default UploadProduct
