import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import Home from './components/home';
import Shop from './components/shop';
import PageNotFound from './components/pageNotFound';

import FrontendLayout from './layouts/FrontendLayout';

function App() {
  return (
    <Router>
    	<Switch>
	        <FrontendLayout path="/" exact component={Home} />
	        <FrontendLayout path="/shop" component={Shop} />
	        <Route component={PageNotFound} />
   		</Switch>
    </Router>
  );
}

export default App;