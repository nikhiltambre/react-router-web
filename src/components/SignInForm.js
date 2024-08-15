import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react'
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

const SignInForm = ({setIsLoggedIn}) => {
  const [FormData,setFormData] = useState({
    email:"" ,password:""
  })
  const navigate = useNavigate();
  const [showPassword,setShowPassword] = useState(false);
  function changeHandler(event){
     const {name,value} = event.target;
     setFormData((prevData)=>({...prevData,[name]:value}));
  }
  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Sign In succesfully")
    navigate("/dashboard")
  }
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email Address<sup>*</sup></p>

            <input
            type='email'
            required
            value={FormData.email}
            onChange={changeHandler}
            placeholder='Enter email Id'
            name='email'
            />
          
        </label>
        <label>
            <p>Password<sup>*</sup></p>

            <input
            type={showPassword ? ("text") : ("password")}
            required
            value={FormData.password}
            onChange={changeHandler}
            placeholder='Enter Your Password'
            name='password'
            />
          <span onClick={() => setShowPassword((prev)=> !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
          </span>
          <NavLink to="#">
            <p>Forgot Password </p>
          </NavLink>
        </label>
        
        <button>Sign In</button>










    </form>
  )
}

export default SignInForm