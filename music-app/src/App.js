
import React, { useEffect, useState } from 'react'
import Navbar from './Component/Navbar'
import Card from './Component/Card'
import axios from './Axios'
import {Route,Routes} from 'react-router-dom'
import Home from './PAGES/Home'
import Login from './Component/Login'
import Register from './Component/Register'

function App() {
//   const clientid='20408e4e14084782ab619d06461274c8'
//   const clientsecret='ddf6961e29874c3ba948a62b5c6af9f8'
//   const [token,setToken] = useState('')
//   useEffect(()=>{
// try {
 
//   var authParameters ={
//     method:'POST',
//     headers: {'Content-Type': 'application/x-www-form-urlencoded'
//   },
//     body:'grant_type=client_credentials&client_id'+ clientid + '&client_secrets'+ clientsecret
//   }
//    fetch('https://accounts.spotify.com/api/token',authParameters)
//    .then(result => result.json())
//    .then(data =>{
//     console.log(data)
//     setToken(data.access_token)
//    })
  
// } catch (error) {
  
// }
//   },[])
  return (
    <>
    <Routes>
   <Route path='/home' element={<Home/>}/>
   <Route path='' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
     
     </Routes>
    {/* <Navbar/>
     <Card/> */}
    </>

  )
}

export default App