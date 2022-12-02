import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../App.jsx'
import AdminNav from '../AdminNavBar/AdminNavBar.jsx'

import {
  Box,
  Card,
  CircularProgress,
  CardContent,
  Typography,
  Button,
  Grid,
  FormControl,
  ImageList,
  Stack,
  styled,
  TextField,
  IconButton,
  InputAdornment,
  InputLabel,
  Divider

} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotAuthorised from '../NotAuthorised/notAuthorised.jsx'

function AdminMain() {
    let navigate = useNavigate();
    const [userRole, setuserRole] = useState("")

    const getUserRole = ()=>{


        api.get('/getuserrole',
        {headers : {
            auth: localStorage.getItem("token")
         }}
        ).then(res => {
            console.log(res.data.data.userRole);
            setuserRole(res.data.data.userRole);
          })

          if(userRole === "User"){
            return(
                <NotAuthorised/>
            );
          // navigate('/notauthorised')
          }
    }
    
          
    useEffect(() => {
      getUserRole();
    }, [])
    
    
return (
    userRole === "User"? <NotAuthorised/>:
    <div>
      <AdminNav />
      <Grid display="flex" sx={{justifyContent:'space-evenly'}}>

                  <Button onClick={() => { navigate('/login') }} style={{ width:150, border: '1px solid #CF3D2F' , color: 'white', backgroundColor: '#CF3D2F', fontSize: '16px', padding: '10px 10px 10px 10px' }}>
                    Users
                </Button>
                <Button onClick={() => { navigate('/login') }} style={{width:150, border: '1px solid #CF3D2F' , color: 'white', backgroundColor: '#CF3D2F', fontSize: '16px', padding: '10px 10px 10px 10px' }}>
                    Biddings
                </Button>
                <Button onClick={() => { navigate('/login') }} style={{width:150, border: '1px solid #CF3D2F' , color: 'white', backgroundColor: '#CF3D2F', fontSize: '16px', padding: '10px 10px 10px 10px' }}>
                    Orders
                </Button>
                <Button onClick={() => { navigate('/login') }} style={{width:150, border: '1px solid #CF3D2F' , color: 'white', backgroundColor: '#CF3D2F', fontSize: '16px', padding: '10px 10px 10px 10px' }}>
                    Products
                </Button>
                <Button onClick={() => { navigate('/formlist') }} style={{width:150, border: '1px solid #CF3D2F' , color: 'white', backgroundColor: '#CF3D2F', fontSize: '16px', padding: '10px 10px 10px 10px' }}
                >
                    Complaints
                </Button>
                </Grid>
    </div>
  )
        }
export default AdminMain