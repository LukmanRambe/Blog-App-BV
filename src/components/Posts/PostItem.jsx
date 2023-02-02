import {
	Card,
	CardActions,
	CardContent,
	Typography,
	Stack,
	Link as LinkUI,
} from '@mui/material';
import { Link } from 'react-router-dom';

const PostItem = ({ post, author }) => {
	return (
		<Card
			sx={{
				minHeight: '300px',
				minWidth: '250px',
				py: 2,
				px: 1,
				borderRadius: 3,
				borderColor: 'transparent',
				justifyContent: 'space-between',
			}}
			elevation={3}>
			<CardContent>
				<Stack justifyContent="space-between" spacing={2}>
					<Typography
						fontWeight="bold"
						fontSize="1.4rem"
						textAlign="left"
						textTransform="capitalize"
						minHeight="60px"
						sx={{
							display: '-webkit-box',
							overflow: 'hidden',
							WebkitBoxOrient: 'vertical',
							WebkitLineClamp: 2,
						}}>
						{post.title}
					</Typography>
					<Stack minHeight="50px" justifyContent="space-between">
						<Typography color="text.secondary" textAlign="left" fontSize="1rem">
							{author}
						</Typography>
						<Typography
							sx={{
								display: '-webkit-box',
								overflow: 'hidden',
								WebkitBoxOrient: 'vertical',
								WebkitLineClamp: 4,
							}}
							textAlign="justify">
							{post.body}
						</Typography>
					</Stack>
				</Stack>
			</CardContent>
			<CardActions sx={{ justifyContent: 'end' }}>
				<LinkUI
					component={Link}
					to={`/posts/${post.id}`}
					size="medium"
					sx={{
						pt: 2,
						pr: 1,
						fontFamily: 'Roboto',
						textDecoration: 'none',
						fontWeight: 'bold',
						'&:hover': {
							color: 'darkblue',
						},
					}}>
					Read more
				</LinkUI>
			</CardActions>
		</Card>
	);
};

export default PostItem;
