import { IconType } from 'react-icons'
import {
	FaHome,
	FaTasks,
	FaHotjar,
	FaClipboardList,
	FaMoneyCheckAlt,
} from 'react-icons/fa'

interface IMenuItem {
	name: string
	icon: IconType
	path: string
}
export const Menu: IMenuItem[] = [
	{
		name: 'Главная',
		icon: FaHome,
		path: '/',
	},
	{
		name: 'Сделки',
		icon: FaHotjar,
		path: '/deals',
	},
	{
		name: 'Покупатели',
		icon: FaMoneyCheckAlt,
		path: '/',
	},
	{
		name: 'Задачи',
		icon: FaTasks,
		path: '/',
	},
	{
		name: 'Списки',
		icon: FaClipboardList,
		path: '/',
	},
]
