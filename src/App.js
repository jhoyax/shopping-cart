import React from 'react';
import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom';

// Import containers
import Home from './containers/home';
import Shop from './containers/shop';
import PageNotFound from './containers/pageNotFound';

// Import layouts
import FrontendLayout from './layouts/FrontendLayout';

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME}>
    	<Switch>
	        <FrontendLayout path="/" exact component={Home} />
	        <FrontendLayout path="/shop" component={Shop} />
	        <FrontendLayout component={PageNotFound} />
   		</Switch>
    </Router>
  );
}

export default App;