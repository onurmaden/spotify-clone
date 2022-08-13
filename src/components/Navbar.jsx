import React from 'react'
import Navigation from './Navbar/Navigation'
import Profile from './Navbar/Profile'
import { BrowserRouter as Router, Routes, Route, matchPath, useMatch } from "react-router-dom";

const Navbar = () => {
  const searchRoute = useMatch("/search");
  return (
    <nav className='flex h-[60px] items-center justify-between px-8'>
      <Navigation/>

      {searchRoute && (
        <div>
          Search
        </div>
      )}
      {/* <Routes>
				<Route exact path="/" element={"<Home />"} />
				<Route path="/search" element={"<Search />"} />
				<Route path="/library" element={"<Library />"} />
			</Routes> */}
      <Profile/>
    </nav>
  )
}

export default Navbar