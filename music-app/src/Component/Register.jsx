import {React,useRef}  from 'react'
import './Style2.css';
import { Link } from 'react-router-dom' 
import backEndAxios from '../backEndAxios'


function Register() {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const CpasswordRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  

   const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      let userData = {
        userName : userNameRef.current.value,
        password : passwordRef.current.value,
        Cpassword : CpasswordRef.current.value,
        email : emailRef.current.value,
        mobile : mobileRef.current.value,
      }
      console.log(userData)
      if(userData.password==userData.Cpassword){
        console.log("password match")
        backEndAxios.post('/Register',userData).then((response)=>{
          console.log(response)
        })
        
    }else{                                              
        console.log("password not matching")
      }
    } catch (error) {
     console.log(error) 
    }
   }
  return (
    <>
    <div className='register'>
    <h3>Register</h3>
    <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Username' ref={userNameRef}/>
              <input type="password" placeholder='Password' ref={passwordRef}/>
              <input type="password" placeholder='confirm password' ref={CpasswordRef} />
              <input type="number" placeholder='Mobile' ref={mobileRef}/>
            <input type="email" placeholder='email id' ref={emailRef}/>
              <button type='submit'>Register</button>
              </form>
    </div>
    </>
  )
}

export default Register