import { Card } from '../features/Card/Card'
import { IoAddCircleOutline } from 'react-icons/io5'
import { FaRegBell } from 'react-icons/fa'
import { SlMagnifier } from 'react-icons/sl'

export const Dashboard: React.FC = () => {
	return (
		<>
			<div className="flex justify-between">
				<h1 className="text-4xl text-white font-semibold">Hi, Vitas!</h1>
				<div className="flex items-center">
					<button className="w-fit h-8 p-4 mr-4 bg-black rounded-2xl text-sm text-white self-center flex items-center justify-center hover:ring-1 hover:ring-red-600 transition hover:bg-indigo-700">
						Добавить
					</button>
					<button className="w-8 h-8 mr-4 flex items-center justify-center rounded-full bg-white hover:scale-110 hover:bg-black hover:text-white transition">
						<FaRegBell size={24} />
					</button>
					<button className="w-8 h-8 mr-4 flex items-center justify-center rounded-full bg-white hover:scale-110 hover:bg-black hover:text-white transition">
						<SlMagnifier size={20} />
					</button>
					<div className="w-12 h-12 rounded-full drop-shadow-xl hover:opacity-60 transition">
						<img
							src="/vitasanime.jpg"
							alt="avatar"
							className="w-full h-full rounded-full object-fit object-center"
						/>
					</div>
				</div>
			</div>

			<div className="w-full pt-8 grid grid-cols-12 gap-4">
				<Card
					id={1}
					onDrop={() => [1, 2]}
					title="Сводка"
					customClass={'bg-black/85 text-white col-span-6'}
				/>
				<Card
					id={2}
					onDrop={() => [2, 6]}
					title="Успехи за неделю"
					customClass={' col-span-2 ring-1 ring-white/80'}
				/>
				<Card
					id={3}
					onDrop={() => [3, 2]}
					title="Успехи за месяц"
					customClass={' bg-white/90 col-span-4'}
				/>
				<Card
					id={4}
					onDrop={() => [4, 6]}
					title="Цели на месяц"
					customClass={'bg-white/90 col-span-2'}
				/>
				<Card
					id={5}
					onDrop={() => [5, 2]}
					title="Задача"
					customClass={'text-white backdrop-blur-md  col-span-2'}
				/>
				<Card
					id={6}
					onDrop={() => [6, 1]}
					title="Задача"
					customClass={'text-white bg-black/85 col-span-6'}
				/>
				<Card
					id={7}
					onDrop={() => [7, 3]}
					title="Добавить виджет"
					customClass={
						'bg-transparent text-white border-2 border-dashed col-span-2 '
					}
					icon={IoAddCircleOutline}
				/>
			</div>
		</>
	)
}
