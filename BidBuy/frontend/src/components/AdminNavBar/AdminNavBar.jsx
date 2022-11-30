import React, { useState } from 'react';
import { Button, 
         TextField,
         IconButton,
         InputAdornment,
         Divider,
        } from '@mui/material';

import './AdminNavBar.css';
import Logo from '../Logo/Logo.jsx';
import { useNavigate } from 'react-router-dom'; 
import Stack from '@mui/material/Stack';

function AdminNav() {
  let navigate = useNavigate();

  const handleSignOut = () => {
   localStorage.clear();
   navigate('/login');
  }

  return (

    <div className='div_Navmain'>
    <div style={{ height: '20px' }}></div>

      <Stack direction="row" spacing={2} justifyContent='space-between' alignItems={"center"} >
        <Logo/>
        
        <div style={{paddingRight: '20px'}}>
        <Button onClick={handleSignOut} style={{ color: 'white', backgroundColor: '#CF3D2F', fontSize:'10px', padding: '6px 10px 5px 13px'}}>
          Sign Out
        </Button>
        </div>
        {/* <button className='btn_cat'>Sign Out</button> */}
        {/* <div style={{padding: '0px' }}></div> */}

      </Stack>

      <div style={{ padding: '5px' }}></div>

      <Divider sx={{marginTop: '10px'}} />
      {/* <div style={{ height: '20px' }}></div> */}


    </div>


  )
}

export default AdminNav