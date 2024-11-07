import { MainLayout } from './layouts/MainLayout'
import { Dashboard } from './pages/Dashboard'

export const App: React.FC = () => {
	return (
		<>
			<MainLayout>
				<Dashboard />
			</MainLayout>
		</>
	)
}
