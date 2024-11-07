import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'

interface CardType {
	id: number
	text: string
}

interface ColumnType {
	id: number
	title: string
	cards: CardType[]
}

interface DragItem {
	columnId: number
	cardId: number
}

interface CardProps {
	card: CardType
	columnId: number
	moveCard: (item: DragItem, targetColumnId: number) => void
}

interface ColumnProps {
	column: ColumnType
	moveCard: (item: DragItem, targetColumnId: number) => void
}

const Card = ({ card, columnId }: CardProps) => {
	const [{ isDragging }, drag] = useDrag({
		type: 'CARD',
		item: { columnId, cardId: card.id },
		collect: (monitor) => ({ isDragging: monitor.isDragging() }),
	})

	return (
		<div
			ref={drag}
			className={`p-4 mb-2 rounded-xl ring-2 ring-white/40 bg-transparent hover:bg-black/60 hover:text-white hover:ring-red-600 transition ${isDragging ? 'opacity-50' : ''}`}
		>
			{card.text}
			<p className="text-sm">Продажа</p>
			<p className="text-sm">Российский рубль RUB</p>
			<p className="text-sm underline">08.11.2025</p>
		</div>
	)
}

const Column = ({ column, moveCard }: ColumnProps) => {
	const [, drop] = useDrop({
		accept: 'CARD',
		drop: (item: DragItem) => moveCard(item, column.id),
	})

	return (
		<div
			ref={drop}
			className="p-2 w-1/4 ring-1 ring-white/80 shadow-xl backdrop-blur-md rounded-2xl text-lg text-black"
		>
			<h2 className="text-2xl font-bold mb-4 text-white">{column.title}</h2>
			{column.cards.map((card) => (
				<Card
					key={card.id}
					card={card}
					columnId={column.id}
					moveCard={moveCard}
				/>
			))}
		</div>
	)
}

export const Deals = () => {
	const [columns, setColumns] = useState<ColumnType[]>([
		{
			id: 1,
			title: 'Заинтересованы',
			cards: [
				{ id: 1, text: 'Вася Пупкин' },
				{ id: 2, text: 'Мария Крылова' },
			],
		},
		{
			id: 2,
			title: 'Контакт с клиентом',
			cards: [
				{ id: 3, text: 'Гос.Заказ' },
				{ id: 4, text: 'ООО Успех' },
			],
		},
		{
			id: 3,
			title: 'Переговоры',
			cards: [
				{ id: 5, text: 'Трамп' },
				{ id: 6, text: 'Мария Санду' },
			],
		},
		{
			id: 4,
			title: 'Заключение контракта',
			cards: [],
		},
	])

	const moveCard = (item: DragItem, targetColumnId: number) => {
		const { columnId, cardId } = item
		if (targetColumnId !== columnId) {
			setColumns((prevColumns) => {
				const newColumns = [...prevColumns]
				const sourceColumnIndex = newColumns.findIndex(
					(column) => column.id === columnId
				)
				const targetColumnIndex = newColumns.findIndex(
					(column) => column.id === targetColumnId
				)

				const card = newColumns[sourceColumnIndex].cards.find(
					(card) => card.id === cardId
				)
				if (!card) return newColumns

				newColumns[sourceColumnIndex].cards = newColumns[
					sourceColumnIndex
				].cards.filter((card) => card.id !== cardId)
				newColumns[targetColumnIndex].cards.push(card)
				return newColumns
			})
		}
	}

	return (
		<DndProvider backend={HTML5Backend}>
			<div className="flex justify-between gap-4">
				{columns.map((column) => (
					<Column key={column.id} column={column} moveCard={moveCard} />
				))}
			</div>
		</DndProvider>
	)
}
