import React, { useState } from 'react';
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"
const SignUpForm = ({setIsLoggedIn}) => {
  const [FormData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""

  })
  const navigate = useNavigate()
  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPass,setShowConfirmPass] = useState(false);

  function changeHandler(event){
    const {name,value} = event.target;
    setFormData((prevData)=>({...prevData,[name]:value}));
 }
  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("loged in successfully")
    navigate("/dashboard")

     
  }

  return (
    <div>
       <div>
         <button>Student</button>
         <button>Instructor</button>

       </div>
       <form onSubmit={submitHandler}>
        <label>
              <p>First Name<sup>*</sup></p>

              <input
              type='text'
              required
              value={FormData.firstName}
              onChange={changeHandler}
              placeholder='Enter First Name'
              name='firstName'
              />
            
          </label>
          <label>
              <p>Last Name<sup>*</sup></p>

              <input
              type='text'
              required
              value={FormData.lastName}
              onChange={changeHandler}
              placeholder='Enter Last Name'
              name='lastName'
              />
            
          </label>
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
        
          </label>
          <label>
              <p>Confirm Password<sup>*</sup></p>

              <input
              type={showConfirmPass ? ("text") : ("password")}
              required
              value={FormData.confirmPassword}
              onChange={changeHandler}
              placeholder='Enter Your Password'
              name='confirmPassword'
              />
            <span onClick={() => setShowConfirmPass((prev)=> !prev)}>
              {showConfirmPass ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
            </span>
          
          </label>
          <button className=' bg-pink-300'>Sign Up</button>
       </form>
       
    </div>
    
  )
}

export default SignUpForm