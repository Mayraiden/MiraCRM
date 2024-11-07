import { useDrag, useDrop } from 'react-dnd'
import { IconType } from 'react-icons'
import { LuMoreVertical } from 'react-icons/lu'

interface ICardProps {
	id: number
	title: string
	customClass?: string
	icon?: IconType | null
	onDrop: (draggedId: number, targetId: number) => void
}

export const Card: React.FC<ICardProps> = ({
	id,
	title,
	customClass,
	icon: Icon,
	onDrop,
}) => {
	const [{ isDragging }, dragRef] = useDrag(() => ({
		type: 'CARD',
		item: { id },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}))

	const [, dropRef] = useDrop(() => ({
		accept: 'CARD',
		drop: (item: { id: number }) => {
			onDrop(item.id, id) // Передаем ID перетаскиваемой карточки и ID цели
		},
	}))

	const dragDropRef = (node: HTMLDivElement | null) => {
		dragRef(node)
		dropRef(node)
	}

	return (
		<div
			ref={dragDropRef}
			className={`h-60 p-2 rounded-2xl text-lg text-black font-semibold shadow-lg hover:scale-105 transition ${customClass} ${isDragging ? 'opacity-60' : ''}`}
		>
			<div className="flex flex-row content-center justify-between items-center">
				<h3>{title}</h3>
				<ul className="flex flex-row">
					<li>
						<LuMoreVertical size={28} />
					</li>
				</ul>
			</div>
			<div className="h-4/5 flex items-center justify-center">
				<button>{Icon && <Icon size={70} />}</button>
			</div>
		</div>
	)
}
