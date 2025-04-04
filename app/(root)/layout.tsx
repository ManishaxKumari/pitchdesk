import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar.tsx';

export default function Layout({ children }:Readonly<{ children: ReactNode }>){
	return (
		<main className='font-work-sans'>
			<Navbar/>
			{children}
		</main>
	);
}