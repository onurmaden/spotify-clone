import React from 'react'
import Navigation from './Navbar/Navigation'
import Profile from './Navbar/Profile'

const Navbar = () => {
  return (
    <nav className='flex h-[60px] bg-backdrop items-center justify-between px-8'>
      <Navigation/>
      <Profile/>
    </nav>
  )
}

export default Navbar