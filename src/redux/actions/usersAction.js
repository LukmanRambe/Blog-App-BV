import axios from 'axios';

import { getAllUsersReducer } from '../reducers/usersReducer';

export const getAllUsers = () => async (dispatch) => {
	try {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);

		dispatch(getAllUsersReducer(data));
	} catch (error) {
		throw error;
	}
};
