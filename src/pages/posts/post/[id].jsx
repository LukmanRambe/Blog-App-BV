import { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/actions/usersAction';
import {
	getDetailPost,
	getAllPostComments,
} from '../../../redux/actions/postsAction';
import { allUsersSelector } from '../../../redux/reducers/usersReducer';
import {
	postCommentsSelector,
	postDetailSelector,
} from '../../../redux/reducers/postsReducer';

import Navbar from '../../../components/Navbar';
import {
	Card,
	Container,
	List,
	Stack,
	Typography,
	Link as LinkUI,
} from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';

const PostDetail = () => {
	const [author, setAuthor] = useState('');
	const dispatch = useDispatch();
	const { postId } = useParams();

	const users = useSelector(allUsersSelector);
	const post = useSelector(postDetailSelector);
	const comments = useSelector(postCommentsSelector);

	useEffect(() => {
		dispatch(getAllUsers());
		dispatch(getDetailPost(postId));
		dispatch(getAllPostComments(postId));
	}, [dispatch, postId]);

	useEffect(() => {
		post && setAuthor(users.filter((user) => user.id === post.userId)[0]?.name);
	}, [post, users]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container sx={{ py: 12, px: 3 }}>
			<Navbar />
			<Stack
				direction="row"
				alignItems="center"
				color="#1976d2"
				spacing={1}
				sx={{
					'&:hover': {
						cursor: 'pointer',
						color: 'darkblue',
					},
				}}>
				<KeyboardBackspace fontSize="medium" />
				<LinkUI
					component={Link}
					to="/posts"
					fontFamily="Roboto"
					underline="none">
					Back
				</LinkUI>
			</Stack>
			{post && (
				<Card
					sx={{
						minHeight: '300px',
						minWidth: '250px',
						mt: 3,
						p: 3,
						borderRadius: 3,
						borderColor: 'transparent',
						justifyContent: 'space-between',
					}}
					elevation={3}>
					<Stack justifyContent="space-between" spacing={2}>
						<Typography
							fontWeight="bold"
							fontSize="1.4rem"
							textAlign="left"
							textTransform="capitalize">
							{post.title}
						</Typography>
						<Stack minHeight="50px" justifyContent="space-between">
							<Typography
								color="text.secondary"
								textAlign="left"
								fontSize="1rem">
								{author}
							</Typography>
							<Typography textAlign="justify">{post.body}</Typography>
						</Stack>
					</Stack>

					<Stack mt={5}>
						<Typography fontWeight="bold" fontSize="1.2rem">
							Comments
						</Typography>
						{comments ? (
							comments.map((comment) => (
								<List key={comment.id}>
									<Typography fontWeight="bold">{comment.email}</Typography>
									<Typography>{comment.body}</Typography>
								</List>
							))
						) : (
							<Typography>There's no comment</Typography>
						)}
					</Stack>
				</Card>
			)}
		</Container>
	);
};

export default PostDetail;
