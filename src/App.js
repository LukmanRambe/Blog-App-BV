import Navbar from './components/Navbar';
import { Container, Typography } from '@mui/material';

const App = () => {
	return (
		<Container sx={{ py: 12, px: 3 }}>
			<Navbar />
			<Typography
				component="h1"
				textAlign="center"
				fontWeight="bold"
				fontSize="2.5rem">
				Welcome to Blog App BV!
			</Typography>
		</Container>
	);
};

export default App;
