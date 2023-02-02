import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/actions/usersAction';
import { getAllPosts } from '../../redux/actions/postsAction';
import { allUsersSelector } from '../../redux/reducers/usersReducer';
import { allPostsSelector } from '../../redux/reducers/postsReducer';

import PostItem from './PostItem';
import { Grid } from '@mui/material';

const PostsList = () => {
	const dispatch = useDispatch();
	const users = useSelector(allUsersSelector);
	const posts = useSelector(allPostsSelector);

	useEffect(() => {
		dispatch(getAllUsers());
		dispatch(getAllPosts());
	}, [dispatch]);

	return (
		<Grid container spacing={5} columns={12} justifyContent="flex-start">
			{posts.map((post) => {
				const author =
					users && users.filter((user) => user.id === post.userId)[0]?.name;

				return (
					<Grid item key={post.id} xs={12} sm={6} md={4}>
						<PostItem post={post} author={author} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default PostsList;
