import React from 'react'
import { NavLink } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import logo from "../assets/Logo.svg"
function NavBar(props){
    let isLogedIn = props.isLogedIn;
    let setLogedIn = props.setLogedIn;
 
  return(
    <div className='flex justify-evenly'>
        <NavLink to="./">
            <img src={logo} alt='logoSvg' width={160} height={32}/>
        </NavLink>
        <nav >
            <ul className='flex gap-3'>
                <li><NavLink to="./">Home</NavLink></li>
                <li><NavLink to="./">About</NavLink></li>
                <li><NavLink to="./">Contact</NavLink></li>
            </ul>
        </nav>
        <div className='flex gap-3 '>
           { !isLogedIn && 
              <NavLink to="./login">
                <button>Login</button>
              </NavLink>
           }
           { !isLogedIn && 
              <NavLink to="./signup">
                <button>Signup</button>
              </NavLink>
           }
           { isLogedIn && 
              <NavLink to="./">
                <button onClick={()=>
                    {setLogedIn(false);
                    toast.success("Logged Out");}

                }>Log Out</button>
              </NavLink>
           }
           { isLogedIn && 
              <NavLink to="./dashboard">
                <button>Dashboard</button>
              </NavLink>
           }
        </div>
    </div>
  )

}
export default NavBar;