import React from 'react'
import Stack from '@mui/material/Stack';
import './Logo.css';

export default function Logo() {
  return (
    //   <div className='div_flex'>

    //   <div className='div_flexed'>
    //     <h1 className='red_txt'>B</h1>
    //   </div>

    //   <div className='div_flexed'>
    //     <h1 className='black_txt'>id</h1>
    //   </div>

    //   <div className='div_flexed'>
    //     <h1 className='red_txt'>B</h1>
    //   </div>

    //   <div className='div_flexed'>
    //     <h1 className='black_txt'>uy</h1>
    //   </div>

    // </div>
    <div style={{paddingLeft: '20px', paddingTop: '10px', fontSize: "12px"}}>
      <Stack direction={'row'}>
        <h1 style={{ padding: '0', margin: '0', color: '#CF3D2F' }}>B</h1>
        <h1 style={{ padding: '0', margin: '0' }}>i</h1>
        <h1 style={{ padding: '0', margin: '0' }}>d</h1>
        <h1 style={{ padding: '0', margin: '0', marginLeft: "2px", color: '#CF3D2F' }}>B</h1>
        <h1 style={{ padding: '0', margin: '0' }}>u</h1>
        <h1 style={{ padding: '0', margin: '0' }}>y</h1>
      </Stack>
    </div>

  )
}
