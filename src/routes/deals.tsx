import { createFileRoute } from '@tanstack/react-router'
import { Deals } from '../pages/Deals'
import { ProtectedRoute } from '../layouts/protectedRoute'

export const Route = createFileRoute('/deals')({
	component: () => (
		<ProtectedRoute>
			<Deals />
		</ProtectedRoute>
	),
})
