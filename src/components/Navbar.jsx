import React from 'react'
import Navigation from './Navbar/Navigation'
import Profile from './Navbar/Profile'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='flex h-[60px] bg-backdrop items-center justify-between px-8'>
      <Navigation/>
      <Routes>
				<Route exact path="/" element={"<Home />"} />
				<Route path="/search" element={"<Search />"} />
				<Route path="/library" element={"<Library />"} />
			</Routes>
      <Profile/>
    </nav>
  )
}

export default Navbar