import React from "react";
import { Icon } from "Icons";
import { NavLink } from "react-router-dom";
import Playlists from "./Playlists";
const Menu = () => {
	return (
		<nav className="">
			<ul id="menu" className="flex flex-col">
				<li>
					<NavLink activeClassName="active text-white" to={"/"}>
						<span>
							<Icon name="home" />
						</span>
						<span>Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active text-white" to={"/search"}>
						<span>
							<Icon name="search" />
						</span>
						<span>Search</span>
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active text-white" to={"/library"}>
						<span>
							<Icon name="library" />
						</span>
						<span>Your Library</span>
					</NavLink>
				</li>
			</ul>
			<ul className="cly">
				<li>
					<a href="" className="group">
						<span className="bg-white opacity-60 group-hover:opacity-100 ">
							<Icon name="plus" size="12px" color="black" className="" />
						</span>
						Create Playlist
					</a>
				</li>
				<li>
					<a href="" className="group">
						<span className=" bg-gradient-to-br from-indigo-700 to-purple-200 opacity-70 group-hover:opacity-100">
							<Icon name="heart" size="12px" color="white" />
						</span>
						Liked Songs
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
