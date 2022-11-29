import React from 'react'
import {
    Box,
    IconButton,
    Stack,
    styled
} from '@mui/material';
import phone from '../../images/ip14.png'

import { useNavigate } from 'react-router-dom'; 
import SmartphoneIcon from '@mui/icons-material/Smartphone';

function CategoryCircle() {
    const Img = styled('img')({
        alignItems: "center",
        maxwidth: "100%",
        width: "150px",
        height: '150px',
        objectFit: 'contain'
        // paddingLeft: "25%"
      });
      let navigate = useNavigate();
    return (
        <div>
            
            <Stack direction='row' spacing={5} justifyContent='space-around'>
                    <Box sx={{ bgcolor: '#EEDC9A', height: '200px', width: '200px' }} borderRadius="200px">
                        <IconButton onClick={() => { navigate('/home') }}  sx={{width:'200px', height:'200px'}}>
                            <Img src={phone}/>
                        </IconButton>
                    </Box>

                    <Box sx={{ bgcolor: '#DFC98A', height: '200px', width: '200px' }} borderRadius="200px">
                    <IconButton  sx={{width:'200px', height:'200px'}}>
                            <Img src={phone}/>
                        </IconButton>
                    </Box>

                    <Box sx={{ bgcolor: '#BDA55D', height: '200px', width: '200px' }} borderRadius="200px">
                    <IconButton  sx={{width:'200px', height:'200px'}}>
                            <Img src={phone}/>
                        </IconButton>
                    </Box>

                    <Box sx={{ bgcolor: '#E3C565', height: '200px', width: '200px' }} borderRadius="200px">
                    <IconButton  sx={{width:'200px', height:'200px'}}>
                            <Img src={phone}/>
                        </IconButton>
                    </Box>

                    <Box sx={{ bgcolor: '#FDEFB2', height: '200px', width: '200px' }} borderRadius="200px">
                    <IconButton  sx={{width:'200px', height:'200px'}}>
                            <Img src={phone}/>
                        </IconButton>
                    </Box>
           </Stack>

               
        </div>
    )
}

export default CategoryCircle
