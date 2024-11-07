import { Form } from '../features/Form/Form'

export const Login = () => {
	return (
		<div className="flex h-full p-12">
			<div className="w-full flex items-center justify-center backdrop-blur-md rounded-2xl ring-1 ring-black/10 shadow-2xl">
				<div className="w-3/4 h-3/4 flex items-center justify-center">
					<Form />
				</div>
			</div>
		</div>
	)
}
