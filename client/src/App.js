import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loads from './pages/Loads';
import Orders from './pages/Orders';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';

const App = () => (
	<Router>
		<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={Loads} />
				<Route exact path="/loads" component={Loads} />
				<Route exact path="/orders" component={Orders} />
				<Route component={NoMatch} />
			</Switch>
		</div>
	</Router>
);

export default App;
