import { Container } from '@mui/material';
import Navbar from '../../components/Navbar';
import UsersList from '../../components/Users/UsersList';

const Users = () => {
	return (
		<Container sx={{ py: 12, px: 3 }}>
			<Navbar />
			<UsersList />
		</Container>
	);
};

export default Users;
