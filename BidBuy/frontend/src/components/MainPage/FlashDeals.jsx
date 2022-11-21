import React from 'react'
import {
    Box,
    Container,
    Stack
} from '@mui/material';


function FlashDeals() {
    return (
        <div>
            
            <Stack direction='row' spacing={5} justifyContent='space-around'>
                    <Box sx={{ bgcolor: '#EEDC9A', height: '200px', width: '200px' }} borderRadius="0px">

                    </Box>

                    <Box sx={{ bgcolor: '#DFC98A', height: '200px', width: '200px' }} borderRadius="0px">

                    </Box>

                    <Box sx={{ bgcolor: '#BDA55D', height: '200px', width: '200px' }} borderRadius="0px">

                    </Box>

                    <Box sx={{ bgcolor: '#E3C565', height: '200px', width: '200px' }} borderRadius="0px">

                    </Box>

                    <Box sx={{ bgcolor: '#FDEFB2', height: '200px', width: '200px' }} borderRadius="0px">

                    </Box>
           </Stack>

               
        </div>
    )
}

export default FlashDeals
