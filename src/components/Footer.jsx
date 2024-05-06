import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Footer() {
  return (
  <div className='footer-container'>
    <div className='footer'>
      <div className='footer1'>
        <p>Copyright © 2024 LeetCode</p>
      </div>
      <div className='footer2'>
        <Link to='/' className='footer-text'>
          Help Center
        </Link>
        <p>|</p>
        <Link to='/' className='footer-text'>
          Jobs
        </Link>
        <p>|</p>
        <Link to='/' className='footer-text'>
          Bug Bounty
        </Link>
        <p>|</p>
        <Link to='/' className='footer-text'>
          Students
        </Link>
        <p>|</p>
        <Link to='/' className='footer-text'>
          Terms
        </Link>
        <p>|</p>
        <Link to='/' className='footer-text'>
          Privacy Policy
        </Link>
        <Link to='/' className='footer-text-last'>
          <i className="fa-solid fa-flag-usa"></i> United States
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Footer
