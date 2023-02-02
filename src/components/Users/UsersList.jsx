import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/actions/usersAction';

import { Grid } from '@mui/material';
import UserItem from './UserItem';
import { allUsersSelector } from '../../redux/reducers/usersReducer';

const UsersList = () => {
	const dispatch = useDispatch();
	const users = useSelector(allUsersSelector);

	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);

	return (
		<Grid container spacing={5} columns={12} justifyContent="flex-start">
			{users &&
				users.map((user) => (
					<Grid item key={user.id} xs={12} sm={6} md={4}>
						<UserItem user={user} />
					</Grid>
				))}
		</Grid>
	);
};

export default UsersList;
