import React, { useState } from 'react';
import { Button, 
         TextField,
         IconButton,
         InputAdornment,
         Divider,
        } from '@mui/material';
import './NavBar.css';
import Logo from '../Logo/Logo.jsx';
import { useNavigate } from 'react-router-dom'; 
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';

function Header() {
  let navigate = useNavigate();
  const [emailAddress, setemailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailAddress = (event) => {
    setemailAddress(event.target.value);
    console.log(emailAddress);
  }
  const handlePassword = (event) => {
    setemailAddress(event.target.value);
    console.log(emailAddress);
  }
  const handleSignOut = () => {
   localStorage.clear();
   navigate('/login');
  }
  return (

    <div className='div_Navmain'>
    <div style={{ height: '20px' }}></div>

      <Stack direction="row" spacing={2} justifyContent='space-between' alignItems={"center"} >
        <Logo/>
        <Button startIcon={<MenuIcon style={{ color: 'white' }}/>} style={{ color: 'white', backgroundColor: '#CF3D2F', fontSize:'10px', padding: '6px 10px 5px 13px' }}>
          Categories
        </Button>
        <TextField
          label=""
          InputProps={{
            sx: { height: "35px", width:"350px", fontSize: '12px', margin: 0, textAlign: 'start', p:0},
            placeholder: "Search",
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button startIcon={<FeaturedPlayListRoundedIcon style={{ color: '#CF3D2F' }} />} style={{ color: 'black', fontSize:'10px' }}>
          Orders
        </Button>
        <Button onClick={() => { navigate('/myfavs') }} startIcon={<FavoriteIcon style={{ color: '#CF3D2F' }} />} style={{ color: 'black', fontSize:'10px' }}>
          Favourites
        </Button>
        <Button onClick={() => { navigate('/cart') }} startIcon={<ShoppingCartIcon style={{ color: '#CF3D2F' }} />} style={{ color: 'black', fontSize:'10px' }}>
          Cart
        </Button>
        <div style={{paddingRight: '20px'}}>
        <Button onClick={handleSignOut} style={{ color: 'white', backgroundColor: '#CF3D2F', fontSize:'10px', padding: '6px 10px 5px 13px'}}>
          Sign Out
        </Button>
        </div>
        {/* <button className='btn_cat'>Sign Out</button> */}
        {/* <div style={{padding: '0px' }}></div> */}


      </Stack>

      <div style={{ padding: '5px' }}></div>


      <Stack direction="row" spacing={12} justifyContent='space-evenly' alignItems={'center'} >

        <Button startIcon={<LocationOnIcon style={{ color: 'red' }} />} style={{ color: 'black', fontSize: '12px', }}>
          Karachi
        </Button>
        <Button onClick={() => { navigate('/') }} style={{ color: 'black', fontSize: '12px', }}>
          Home
        </Button>

        <Button onClick={() => { navigate('/profile') }} style={{ color: 'black', fontSize: '12px', }}>
          My Profile
        </Button>

        <Button onClick={() => { navigate('/myauctions') }} style={{ color: 'black', fontSize: '12px', }}>
          My Auctions
        </Button>

        <Button onClick={() => { navigate('/mybids') }} style={{  color: 'black', fontSize: '12px', }}>
          My Bids
        </Button>

        <Button style={{ color: 'black', fontSize: '12px', }}>
          Contact Us
        </Button>

        <Button style={{ color: 'black', fontSize: '12px', paddingRight: '10px' }} size="small">
          Sell Now
        </Button>

      </Stack>
      <Divider sx={{marginTop: '10px'}} />
      {/* <div style={{ height: '20px' }}></div> */}

    </div>

  )
}

export default Header