import React from "react";
import Logo from "assets/Logo.svg";
import Menu from "./Sidebar/Menu";
import Playlists from "./Sidebar/Playlists";

const Sidebar = () => {
	return (
		<aside className="flex flex-col flex-shrink-0 w-60 pt-6 bg-black">
			<a href="#" className="mb-[18px] px-6">
				<img src={Logo} className="h-10 mb-5" alt=""/>
			</a>
			<Menu/>
			<Playlists/>
		</aside>
	);
};

export default Sidebar;
