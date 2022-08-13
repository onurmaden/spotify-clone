import React from "react";
import Navbar from "components/Navbar";
import Home from "views/Home";
import Search from "views/Search";
import Library from "views/Library";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Content = () => {
	return (
		<main className="flex-auto bg-gradient-to-b from-zinc-600 to-backdrop overflow-auto">
			<Navbar />
			<div className="px-8 pt-2">
			<Routes>
				<Route path="/home" element={<Home />}/>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/search" element={<Search />} />
				<Route path="/library" element={<Library />} />
				<Route
        		path="*"
        		element={<Navigate to="/" replace />}
   				 />
				
			</Routes>
			</div>
			
		</main>
	);
};

export default Content
