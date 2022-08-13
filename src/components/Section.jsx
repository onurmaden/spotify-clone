import React from "react";
import { NavLink } from "react-router-dom";
import { LoremIpsum } from "lorem-ipsum";

function Section({ title, more = true, items, data }) {
	const lorem = new LoremIpsum()
    return (
		<section className="">
			<header className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                    {title}
                    <span>
                        {data}
                    </span>
                </h3>
			    {more && 
                <NavLink className={"text-xs font-semibold bg-transparent text-link hover:underline"} to={more}>
                SEE ALL
                </NavLink>
                }
            </header>
            <div className="grid grid-cols-5 gap-x-6">
                {items.map(item => (
                    <NavLink 
                    key={item.id} 
                    to='/'
                    className={"bg-footer p-4 rounded flex flex-col hover:bg-highlighted mx-2"}
                    >
                        <div className="pt-[100%] mb-4 relative">
                            <img src={item.image} alt="" className="absolute inset-0 object-cover w-full h-full rounded" />
                        </div>
                        <div className="">
                            <h4 className="text-base overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
                            {lorem.generateWords(2)}
                            </h4>
                            <p className="line-clamp-2 text-link text-sm mt-1">
                           
                            {lorem.generateWords(7)}
                            
                            </p>
                            
                        </div>
                        
                    
                    </NavLink>
                ))}

            </div>
		</section>
	);
};

export default Section;
