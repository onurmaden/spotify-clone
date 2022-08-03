import React from "react";
import Logo from "assets/Logo.svg";
import Menu from "./Sidebar/Menu";

const Sidebar = () => {
	return (
		<aside className="flex flex-col w-60 py-6 bg-black">
			<a href="#" className="mb-[18px] px-6">
				<img src={Logo} className="h-10 mb-5" alt="" />
			</a>
			<nav className="px-2">
				<Menu />
			</nav>
		</aside>
	);
};

export default Sidebar;
