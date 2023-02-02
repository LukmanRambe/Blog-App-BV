import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [],
};

const usersSlicer = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getAllUsersReducer: (state, action) => {
			state.users = action.payload;
		},
	},
});

export const { getAllUsersReducer } = usersSlicer.actions;
export default usersSlicer.reducer;

const selectAllUsers = (state) => state.users.users;

export const allUsersSelector = createSelector(
	selectAllUsers,
	(users) => users
);
