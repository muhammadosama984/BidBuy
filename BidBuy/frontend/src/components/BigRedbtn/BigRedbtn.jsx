import React from 'react'
import '../LogIn/Login.css';
function BigRedbtn(props){   
    return(
        <button className='btn_SignIn' onClick={props.onClick}>{props.name}</button>
    )
}


export default BigRedbtn;