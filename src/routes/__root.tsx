import { createRootRoute, Outlet } from '@tanstack/react-router'
import { MainLayout } from '../layouts/MainLayout'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
export const Route = createRootRoute({
	component: () => (
		<DndProvider backend={HTML5Backend}>
			<MainLayout>
				<Outlet />
			</MainLayout>
		</DndProvider>
	),
})
