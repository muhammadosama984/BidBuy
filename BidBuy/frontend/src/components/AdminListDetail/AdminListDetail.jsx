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

function AdminListDetail() {
return (
    <div>
      <AdminNav />
    </div>
  )
        }
export default AdminListDetail