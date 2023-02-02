import { Container } from '@mui/material';
import Navbar from '../../components/Navbar';
import PostsList from '../../components/Posts/PostsList';

const posts = () => {
	return (
		<Container sx={{ py: 12, px: 3 }}>
			<Navbar />
			<PostsList />
		</Container>
	);
};

export default posts;
