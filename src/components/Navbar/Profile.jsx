import React from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "Icons";

function Profile() {
	const user = {
		name: "onurmaden",
		pp: "https://media-exp1.licdn.com/dms/image/C4D03AQFoBtPKF7hgdA/profile-displayphoto-shrink_800_800/0/1659296346863?e=1665619200&v=beta&t=eAotN-iHiTsA3NdV4vtCnVOJRTNspps45YApGMLg0oA",
	};

	return (
		<Menu as={"nav"} className="relative">
			{({open}) => (
				<>
					<Menu.Button
						className={
							`flex items-center h-8 rounded-3xl pr-2 hover:bg-highlighted ${open ? 'bg-highlighted' : 'bg-black'}`
						}
					>
						<img
							src={user.pp}
							className={"w-8 h-8 p-px mr-1 rounded-full"}
							alt=""
						/>
						<span className="text-sm font-semibold mr-2">{user.name}</span>
						<span className={open && 'rotate-180'}>
                            <Icon size={16} name="downdir" />
                        </span>
					</Menu.Button>
					<Menu.Items
						className={
							"absolute top-full right-0 w-[196px] bg-highlighted rounded translate-y-2"
						}
					>
						<Menu.Item>
							{({ active }) => (
								<a
									className={`${active && "bg-blue-500"}`}
									href="/account-settings"
								>
									Account settings
								</a>
							)}
						</Menu.Item>
					</Menu.Items>
				</>
			)}
		</Menu>
	);
}

export default Profile;
