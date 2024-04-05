import React, { useEffect, useState } from 'react'
import './Style.css';
import { IoIosHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { FaCrown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"
function Navbar() {
  const navigate = useNavigate()
  const [user,setUser] = useState('');
  const logout = (req,res)=>{
    try {
      localStorage.removeItem('auth_info');
      setUser('')
      navigate('/')

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    try {
     let userData = localStorage.getItem('auth_info');
     if(userData) {
      userData = JSON.parse(userData);
      console.log(userData,"from nav user");
      setUser(userData);
      console.log(user,"from nav user");
     } 
    } catch (error) {
      
    }
  
  }, [])
  
  
  return (
    <>
    <div className='navbar'>
        <div className='icons'><IoIosHome/><br />
        <div className='nav_opt'>Home</div>
        </div>
        <div className='icons'><FaSearch/><br />
        <div className='nav_opt'>Search</div>
        </div>
        <div className='icons'><MdLibraryMusic/><br />
        <div className='nav_opt'>Your Library</div>
        </div>
        <div className='icons'><FaCrown/><br />
        
        {
          user ?
          <div className='nav_opt'>{user.userName}</div> :
          <div className='nav_opt'>Premium</div>

        }
        </div>
        { 
        user ? <div className='nav_opt' onClick={logout}>Logout</div> : ""
        }

    </div>
   
    </>
  )
}

export default Navbar