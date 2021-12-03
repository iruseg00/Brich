import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Register from './views/register/Register';
import Login from './views/login/Login';
// import MainTests from './views/dashboard/Dashboard';
import PageWrapper from './containers/pageWrapper/PageWrapper';
import { whoAmI } from './redux/actions/users';
import Page_404 from './views/page_404/Page_404';
import BrichProfile from './views/brichProfile/BrichProfile';

const App = () => {
	const auth = useSelector((state) => state.auth);
	const user = useSelector((state) => state.users.profile);
	const dispatch = useDispatch();
	useEffect(() => {
		if (auth.accessToken && !user.name) dispatch(whoAmI());
	}, [dispatch, auth, user]);

	return (
		<Switch>
			{/* <Route
				exact
				path='/'-
				render={() => (
					<Redirect from='/' to={{ pathname: '/dashboard', state: location.state }} />
				)}
			/> */}

			<Route
				path='/login'
				render={(props) => <PageWrapper {...props} title='Вход' component={Login} notAuth />}
			/>
			<Route
				path='/register'
				render={(props) => (
					<PageWrapper {...props} title='Регистрация' component={Register} notAuth />
				)}
			/>
			<Route path='/' component={BrichProfile} />
			{/* <Route
				path='/dashboard'
				render={(props) => (
					<PageWrapper {...props} title='Тесты' component={MainTests} Auth />
				)}
			/> */}
			<Route path='*' exact component={Page_404} />
		</Switch>
	);
};

export default App;
