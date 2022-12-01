import React from 'react'
import { useState, useEffect } from 'react'
import { api } from '../../App.jsx'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import TextField from '@mui/material/TextField';
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
    Grid,
    Item,
    Fab,
    Divider

} from '@mui/material';

function ContactUs() {
    let navigate = useNavigate();
    const [name, setname] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [showError, setshowError] = useState(false);
    const [showLoading, setshowLoading] = useState(false);

    const submitHandler = async () => {
        
        await api.post('/postForm', {
            name: name,
            phonenumber: phonenumber,
            email: email,
            message: message,
        })
          .then(function (response) {
            setshowLoading(false);
            console.log(response.data);
    
            if (response.data.statusCode === 200) {
                navigate('/');
            }
            if (response.data.statusCode !== 200) {
              setshowError(true);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    

    return (
        <div>
            <NavBar />
            <center>
                <div>
                    <h2 className='welcome_heading'> Get in touch </h2>
                    <p>  Facing some issue? Lets talk </p>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField fullWidth
                                value={name} onChange={(event) => { setname(event.target.value) }} type="String" label="" id="fullWidth"
                                inputProps={
                                    { sx: { height: "2vh", textAlign: 'left', fontSize: '2.5vh', color: 'black', opacity: "1" } }
                                } placeholder="Your Name" />

                            <TextField fullWidth
                                value={phonenumber} onChange={(event) => { setphonenumber(event.target.value) }} type="String" label="" id="fullWidth"
                                inputProps={
                                    { sx: { height: "2vh", textAlign: 'left', fontSize: '2.5vh', color: 'black', opacity: "1" } }
                                } placeholder="Contact Number" />
                            <TextField fullWidth
                                value={email} onChange={(event) => { setemail(event.target.value) }} type="String" label="" id="fullWidth"
                                inputProps={
                                    { sx: { height: "2vh", textAlign: 'left', fontSize: '2.5vh', color: 'black', opacity: "1" } }
                                } placeholder="Email Address" />
                        </Box>

                        <Box
                            sx={{
                                width: 675,
                                maxWidth: '100%',
                            }}
                        >

                            <TextField multiline rows={4} fullWidth
                                value={message} onChange={(event) => { setmessage(event.target.value) }} type="String" label="" id="fullWidth"
                                inputProps={
                                    { sx: { height: "2vh", textAlign: 'left', fontSize: '2.5vh', color: 'black', opacity: "1" } }
                                } placeholder="Your Message" />
                                <Button fullWidth onClick={submitHandler} style={{border: '1px solid #CF3D2F' , color: 'white', backgroundColor: '#CF3D2F', fontSize: '16px', marginTop: 8 }}>
                    Submit
                </Button>
                        </Box>
                        
                    </div>

                    
                </div>
                
            </center>
        </div>

    )

}

export default ContactUs