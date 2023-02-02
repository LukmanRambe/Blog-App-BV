import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Users from './pages/users/users';
import Posts from './pages/posts/posts';
import PostDetail from './pages/posts/post/[id]';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/users',
		element: <Users />,
	},
	{
		path: '/posts',
		element: <Posts />,
	},
	{
		path: '/posts/:postId',
		element: <PostDetail />,
	},
]);

export default router;
