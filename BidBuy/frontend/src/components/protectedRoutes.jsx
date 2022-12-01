import React, { Fragment, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { api } from '../App.jsx'

const ProtectedRoute = () => {
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
    }

    return (

        <>
        
        
        
        
        
        </>
        // <Fragment>
        //     {loading === false && (
        //         <Route
        //             {...rest}
        //             render={props => {
        //                 if (isAuthenticated === false) {
        //                     return <Redirect to='/login' />
        //                 }

        //                 if (isAdmin === true && user.role !== 'admin') {
        //                     //console.log("redirected to home")
        //                     return <Redirect to="/homepage" />
        //                 }

        //                 return <Component {...props} />
        //             }}
        //         />
        //     )}
        // </Fragment>
    )
}

export default ProtectedRoute