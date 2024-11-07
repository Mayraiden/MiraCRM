import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from '../pages/Dashboard'
import { ProtectedRoute } from '../layouts/protectedRoute'

export const Route = createFileRoute('/')({
	component: () => (
		<ProtectedRoute>
			<Dashboard />
		</ProtectedRoute>
	),
})
