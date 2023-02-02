import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
	posts: [],
	post: null,
};

const postsSlicer = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getAllPostsReducer: (state, action) => {
			state.posts = action.payload;
		},
		getDetailPostReducer: (state, action) => {
			state.post = action.payload;
		},
		getAllPostCommentsReducer: (state, action) => {
			state.comments = action.payload;
		},
	},
});

export const {
	getAllPostsReducer,
	getDetailPostReducer,
	getAllPostCommentsReducer,
} = postsSlicer.actions;
export default postsSlicer.reducer;

const selectAllPosts = (state) => state.posts.posts;
const selectPostDetail = (state) => state.posts.post;
const selectPostComments = (state) => state.posts.comments;

export const allPostsSelector = createSelector(
	selectAllPosts,
	(posts) => posts
);

export const postDetailSelector = createSelector(
	selectPostDetail,
	(post) => post
);

export const postCommentsSelector = createSelector(
	selectPostComments,
	(comments) => comments
);
