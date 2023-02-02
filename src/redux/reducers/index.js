import { combineReducers } from '@reduxjs/toolkit';
import PostsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
	users: usersReducer,
	posts: PostsReducer,
});
