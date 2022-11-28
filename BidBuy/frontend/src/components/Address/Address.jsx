import React, { useState } from 'react'
import {
    Box,
    Card,
    Grid,
    Typography,
    TextField,
    InputAdornment,
    Divider,
    Button,
    Stack,
} from '@mui/material';
import NavBar from '../NavBar/NavBar';
import Heading from '../Text/Heading';
import CardBill from '../Cart/CardBill';
import SignUpTextField from '../Signup/SignUpTextField';
import AddressTextField from './AddressTextField';
import AddressBill from './AddressBill';
function Address() {
    return (
        <>
            <NavBar />
            <Heading first="Your" second="Address" />
            <Stack direction="row" spacing={0} alignItems={"center"} justifyContent={'space-evenly'}>

                <Stack spacing={1} direction={'column'}>
                    <AddressTextField name="House Number"/>
                    <AddressTextField name="Street"/>
                    <AddressTextField name="Area"/>
                    <AddressTextField name="City"/>
                    <AddressTextField name="Country"/>
                </Stack>


                <AddressBill />

            </Stack>
        </>
    )
}

export default Address
