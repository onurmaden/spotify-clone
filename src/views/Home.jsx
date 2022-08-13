import React from "react";
import Section from "components/Section";
// import UserData from "components/UserData";
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

const Home = () => {
	const items = [
    {
      id: 1,
      title:'asd',
      description:'qwerasdf',
      image:'https://picsum.photos/800'
    },
    {
      id: 2,
      title:'asdf',
      description:'werqwer',
      image:'https://picsum.photos/801'
    },
    {
      id: 3,
      title:'asdf',
      description:'sdfgsdfg',
      image:'https://picsum.photos/799'
    },
    {
      id: 4,
      title:'asdf',
      description:'sdfgsdfg',
      image:'https://picsum.photos/802'
    },
    {
      id: 5,
      title:'asdf',
      description:'asdfgsdfgh',
      image:'https://picsum.photos/798'
    },
    
  ]
  return (
		<div className="flex flex-col gap-y-8">
			<Section 
        title="Recently played"
        more="/"
        items={items}
      />
      <Section 
        title="Recently played"
        more="/"
        items={items}
      />
      <Section 
        title="Recently played"
        more="/"
        items={items}
      />
      <Section 
        title="Recently played"
        more="/"
        items={items}
      />
		</div>
	);
};

export default Home
