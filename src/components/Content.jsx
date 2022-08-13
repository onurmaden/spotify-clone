import React from "react";
import Navbar from "components/Navbar";
import Home from "views/Home";
import Search from "views/Search";
import Library from "views/Library";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Content = () => {
	return (
		<main className="flex-auto bg-gradient-to-b from-zinc-600 to-backdrop overflow-auto">
			<Navbar />
			<div className="px-8 pt-2">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/library" element={<Library />} />
			</Routes>
			</div>
			
		</main>
	);
};

export default Content
