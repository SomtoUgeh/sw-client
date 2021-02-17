import App from './components/App';
import People from 'components/people/People';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { store } from './store';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Planets from 'components/planets/Planets';
import Films from 'components/films/Films';
import Species from 'components/species/Species';
import Starships from 'components/starships/Starships';
import Vehicles from 'components/vehicles/Vehicles';
import Favorite from 'components/favorites/Favorite';

const GlobalStyle = createGlobalStyle`
	*, body {
		margin: 0;
		padding: 0;
	}

	body {
		background-color: #161616 !important;
	}

	a,
	p {
		font-family: 'Roboto Mono', monospace;
	}
`;

const routes = (
	<Provider store={store}>
		<Router>
			<GlobalStyle />
			<App>
				<Switch>
					<Route component={Planets} exact path="/planets" />
					<Route component={Films} exact path="/films" />
					<Route component={Species} exact path="/species" />
					<Route component={Starships} exact path="/starships" />
					<Route component={Vehicles} exact path="/vehicles" />
					<Route component={Favorite} exact path="/favorite" />
					<Route component={People} exact path={['/', '/people']} />
				</Switch>
			</App>
		</Router>
	</Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
