import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	email: null as string | null,
	token: null as string | null,
	id: null as string | null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(
			state,
			action: PayloadAction<{ email: string; id: string; token: string }>
		) {
			state.email = action.payload.email
			state.token = action.payload.token
			state.id = action.payload.id
		},
		removeUser(state) {
			state.email = null
			state.token = null
			state.id = null
		},
	},
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
