import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Signin from './Userloginregirter/Signin'
import Register from './Userloginregirter/Register'
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout ,user} = useAuth0();
  return (
    <header className='navbar'>
      <div className='navbar-part1'>
        <Link to='/' className='Navlogo'>
          <img src='https://leetcode.com/static/images/LeetCode_logo_rvs.png' />
        </Link>
        <nav>
          <li>
            <NavLink to='/' className={({ isActive }) =>
              `mr-5 font-medium
                            ${isActive ?
                "text-white pb-3 border-b-[2px]" :
                "text-gray-400 hover:text-white"
              }
                            hover:text-white`
            }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/explore' className={({ isActive }) =>
              `mr-5 font-medium
                            ${isActive ?
                "text-white pb-3 border-b-[2px]" :
                "text-gray-400 hover:text-white"
              }
                            hover:text-white`
            }>
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink to='/problems' className={({ isActive }) =>
              `mr-5 font-medium
                            ${isActive ?
                "text-white pb-3 border-b-[2px]" :
                "text-gray-400 hover:text-white"
              }
                            hover:text-white`
            }>
              Problems
            </NavLink>
          </li>
          <li>
            <NavLink to='/tutorials' className={({ isActive }) =>
              `mr-5 font-medium
                            ${isActive ?
                "text-white pb-3 border-b-[2px]" :
                "text-gray-400 hover:text-white"
              }
                            hover:text-white `
            }>
              Tutorials
            </NavLink>
          </li>
        </nav>

      </div>
      <li className='nav-middle'>{isAuthenticated && <p>Hey {user.name}, just code it..!</p>}</li>
      <div className='navbar-part2'>
        {/* {
          isAuthenticated ?
            <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
            </li>
            : <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
        } */}

        <Link to='/register' className='regular-btn'>
          <button>Register</button>
        </Link>
        <p>or</p>
        <Link to='/signin' className='regular-btn'>
          <button>Sign in</button>
        </Link>
        <Link to='' className='premium-btn'>
          <button>Premium</button>
        </Link>
      </div>
    </header>
  )
}

export default Navbar