import { Menu } from '../../utils/Menu'
import { Link } from '@tanstack/react-router'

export const Sidebar = () => {
	return (
		<div className="m-2 w-48 p-4 bg-white/90 rounded-2xl text-black ring-1 ring-black/40 shadow-2xl">
			<ul className="flex flex-col">
				{Menu.map((item, index) => (
					<li
						key={index}
						className="mb-2 p-2 hover:bg-black hover:text-white rounded-lg transition"
					>
						<Link
							to={item.path}
							className="flex flex-row flex-center items-center gap-2"
						>
							<span>{<item.icon />}</span>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
