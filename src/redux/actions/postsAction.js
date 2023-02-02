import axios from 'axios';

import {
	getAllPostsReducer,
	getDetailPostReducer,
	getAllPostCommentsReducer,
} from '../reducers/postsReducer';

export const getAllPosts = () => async (dispatch) => {
	try {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);

		dispatch(getAllPostsReducer(data));
	} catch (error) {
		throw error;
	}
};

export const getDetailPost = (id) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);

		dispatch(getDetailPostReducer(data));
	} catch (error) {
		throw error;
	}
};

export const getAllPostComments = (id) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${id}/comments`
		);

		dispatch(getAllPostCommentsReducer(data));
	} catch (error) {
		throw error;
	}
};
