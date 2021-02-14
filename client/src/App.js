import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loads from './pages/Loads';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';

const App = () => (
	<Router>
		<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={Loads} />
				<Route exact path="/loads" component={Loads} />
				<Route component={NoMatch} />
			</Switch>
		</div>
	</Router>
);

export default App;
