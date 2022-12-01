import React from 'react'
import { useState, useEffect } from 'react'
import { api } from '../../App.jsx'
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
                                value={""} type="String" label="" id="fullWidth"
                                inputProps={
                                    { sx: { height: "2vh", textAlign: 'left', fontSize: '2.5vh', color: 'black', opacity: "1" } }
                                } placeholder="Your Name" />

                            <TextField fullWidth
                                value={""} type="String" label="" id="fullWidth"
                                inputProps={
                                    { sx: { height: "2vh", textAlign: 'left', fontSize: '2.5vh', color: 'black', opacity: "1" } }
                                } placeholder="Contact Number" />
                            <TextField fullWidth
                                value={""} type="String" label="" id="fullWidth"
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
                                value={""} type="String" label="" id="fullWidth"
                                inputProps={
                                    { sx: { height: "2vh", textAlign: 'left', fontSize: '2.5vh', color: 'black', opacity: "1" } }
                                } placeholder="Your Message" />
                        </Box>
                    </div>


                </div>
            </center>
        </div>

    )

}

export default ContactUs