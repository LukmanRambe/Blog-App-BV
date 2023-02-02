import {
	AppBar,
	Container,
	Stack,
	Toolbar,
	Link as LinkUI,
} from '@mui/material';

import { Link } from 'react-router-dom';

const Navbar = () => {
	const pages = [
		{ key: '/users', label: 'Users' },
		{ key: '/posts', label: 'Posts' },
	];

	return (
		<AppBar>
			<Container maxWidth="xl">
				<Toolbar>
					<Stack direction="row" spacing={3}>
						{pages.map((page) => (
							<LinkUI
								key={page.key}
								component={Link}
								to={page.key}
								color="white"
								underline="none"
								fontFamily="Roboto"
								letterSpacing="0.3px"
								sx={{
									'&:hover': {
										color: '#DCDCDC',
									},
								}}>
								{page.label}
							</LinkUI>
						))}
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
