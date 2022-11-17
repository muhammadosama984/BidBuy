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
import CardProduct from './CardProduct';
import myImage from '../../images/ip14.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { maxHeight } from '@mui/system';
// import { Stack } from '@mui/system';

function CardGrid(props) {
    
    return (
        <Stack direction="column" spacing={2} alignItems={"center"}>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          {/* Image Not using props currently*/}
          <CardProduct image={myImage} />
          <CardProduct image={myImage} />
          <CardProduct image={myImage} />
          <CardProduct image={myImage} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          {/* Image Not using props currently*/}
          <CardProduct image={myImage} />
          <CardProduct image={myImage} />
          <CardProduct image={myImage} />
          <CardProduct image={myImage} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems={"center"}>
          {/* Image Not using props currently*/}
          <CardProduct image={myImage} />
          <CardProduct image={myImage} />
          <CardProduct image={myImage} />
          <CardProduct image={myImage} />
        </Stack>
      </Stack>
       )
}

export default CardGrid