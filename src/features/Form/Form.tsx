import { useState } from 'react'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { setUser } from '../../store/slices/userSlice'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from '@tanstack/react-router'
import { supabase } from '../../api/supabaseApi'

export const Form = () => {
	const dispatch = useAppDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [successMessage, setSuccessMessage] = useState<string | null>(null)
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	// Обработчик регистрации
	const handleRegister = async () => {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
		})
		if (error) {
			console.error('Ошибка регистрации:', error.message)
		} else if (data.user) {
			dispatch(
				setUser({
					email: data.user.email!,
					id: data.user.id,
					token: data.session?.access_token!,
				})
			)
			setSuccessMessage('Вы успешно зарегистрировались!')
			setEmail('')
			setPassword('')
			setTimeout(() => setSuccessMessage(null), 3000)
		}
	}

	// Обработчик входа
	const handleLogin = async () => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		})
		if (error) {
			console.error('Ошибка входа:', error.message)
		} else if (data.user) {
			dispatch(
				setUser({
					email: data.user.email!,
					id: data.user.id,
					token: data.session?.access_token!,
				})
			)
			navigate({ to: '/' })
		}
	}

	if (isAuth) {
		navigate({ to: '/' })
	}

	return (
		<div className="w-2/4 text-white">
			<h2 className="mb-2 text-2xl font-bold text-black">
				Привет! Войди в систему
			</h2>

			{/* Сообщение об успешной регистрации */}
			{successMessage && (
				<div className="p-4 mb-4 text-center text-green-700 bg-green-100 rounded-lg">
					{successMessage}
				</div>
			)}

			<form className="flex flex-col gap-4">
				<input
					className="p-2 bg-transparent placeholder-white/80 rounded-xl ring-2 ring-black/10 shadow-lg backdrop-blur-md outline-none focus:ring-red-600 focus:ring-1 focus:bg-black/30 transition"
					type="email"
					placeholder="Введите свой email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="p-2 bg-transparent placeholder-white/80 rounded-xl ring-2 ring-black/10 shadow-lg backdrop-blur-md outline-none focus:ring-red-600 focus:ring-1 focus:bg-black/30 transition"
					type="password"
					placeholder="Введите пароль"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<div className="flex flex-col items-center">
					<button
						className="text-black hover:text-red-600 transition duration-300"
						type="button"
						onClick={handleRegister}
					>
						Зарегистрироваться
					</button>
					<button
						className="w-1/4 text-black hover:text-red-600 transition-all duration-300"
						type="button"
						onClick={handleLogin}
					>
						Войти
					</button>
				</div>
			</form>
		</div>
	)
}
