import {
	Card,
	CardContent,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { Mail, Phone, Language, Place } from '@mui/icons-material';

const UserItem = ({ user }) => {
	return (
		<Card
			sx={{
				minHeight: '300px',
				minWidth: '250px',
				pt: 3,
				borderRadius: 3,
				borderColor: 'transparent',
			}}
			elevation={3}>
			<CardContent>
				<Typography fontWeight="bold" fontSize="1.25rem" textAlign="center">
					{user.name}
				</Typography>
				<List>
					<ListItem>
						<ListItemIcon>
							<Mail />
						</ListItemIcon>
						<ListItemText>
							<Typography>{user.email}</Typography>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Phone />
						</ListItemIcon>
						<ListItemText>
							<Typography>{user.phone}</Typography>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Language />
						</ListItemIcon>
						<ListItemText>
							<Typography>{user.website}</Typography>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<Place />
						</ListItemIcon>
						<ListItemText>
							<Typography>{user.address.city}</Typography>
						</ListItemText>
					</ListItem>
				</List>
			</CardContent>
		</Card>
	);
};

export default UserItem;
