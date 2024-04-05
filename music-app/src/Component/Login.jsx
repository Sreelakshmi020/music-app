import React, { useRef } from 'react'
import './Style2.css';
import { Link } from 'react-router-dom'
import backEndAxios from '../backEndAxios'
import { useNavigate } from "react-router-dom"


function Login() {
  const UsernameRef = useRef(null);
  const PasswordRef = useRef(null);

  const navigate = useNavigate()


  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      let userData = {
        userName : UsernameRef.current.value,
        password : PasswordRef.current.value,
      }
      console.log(userData)
      backEndAxios.post('/Login',userData).then((response)=>{
        console.log(response)
        if(response.data){ 
            let userdata = JSON.stringify(response.data)
            console.log(userdata,"string-----")
          localStorage.setItem('auth_info', userdata)
          navigate('/home')
         
          
        }
      })
    } catch (error) {
      
    }
  }
  return (
    <>
    <div className='login'>
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Username' ref={UsernameRef}/>
      <input type="password" placeholder='Password' ref={PasswordRef} />
      
      <button className='btn' type='submit'>Login</button>
      </form>
    </div>
    </>
  )
}

export default Login