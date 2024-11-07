import React from 'react'
import { Sidebar } from '../features/Sidebar/Sidebar'

interface IMainProps {
	children: React.ReactNode
}

export const MainLayout: React.FC<IMainProps> = ({ children }) => {
	return (
		<div className="flex h-screen">
			<div className="flex m-4 w-full backdrop-blur-sm rounded-2xl ring-1 ring-black/10 shadow-2xl">
				<Sidebar />
				<main className="p-4 w-full">{children}</main>
			</div>
		</div>
	)
}
