import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div>
			{children}
		</div>
	);
}