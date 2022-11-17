import React from 'react'
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
    styled

} from '@mui/material';
import BidCard from './BidCard';
import myImage from '../../images/ip14.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { maxHeight } from '@mui/system';
// import { Stack } from '@mui/system';

function BidGrid(props) {
    
    return (
        <Stack direction="column" spacing={0} alignItems={"center"}>
        
        <Stack direction="row" spacing={0} alignItems={"center"}>
          {/* Image Not using props currently*/}
          <BidCard image={myImage} />
          <BidCard image={myImage} />
          <BidCard image={myImage} />
          <BidCard image={myImage} />
        </Stack>
        <Stack direction="row" spacing={0} alignItems={"center"}>
          {/* Image Not using props currently*/}
          <BidCard image={myImage} />
          <BidCard image={myImage} />
          <BidCard image={myImage} />
          <BidCard image={myImage} />
        </Stack>
        <Stack direction="row" spacing={0} alignItems={"center"}>
          {/* Image Not using props currently*/}
          <BidCard image={myImage} />
          <BidCard image={myImage} />
          <BidCard image={myImage} />
          <BidCard image={myImage} />
        </Stack>
      </Stack>
       )
}

export default BidGrid