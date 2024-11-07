import { useAuth } from '../hooks/useAuth'
import { useNavigate } from '@tanstack/react-router'

export function ProtectedRoute({ children }: { children: JSX.Element }) {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	if (!isAuth) {
		navigate({ to: '/login' })
		return null
	}

	return children
}
