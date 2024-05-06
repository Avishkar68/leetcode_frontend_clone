import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Contact from './components/Contact/Contact'
// import Github from './components/Github/Github'
// import User from './components/User/User'

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
