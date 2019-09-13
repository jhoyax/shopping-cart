import React from 'react';
import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom';

// Import redux
import { Provider } from 'react-redux'
import store from "./redux/Store";

// Import components
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Login from './components/pages/Login';
import PageNotFound from './components/pages/PageNotFound';

// Import layouts
import FrontendLayout from './components/layouts/FrontendLayout';

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.REACT_APP_BASENAME}>
      	<Switch>
  	        <FrontendLayout path="/" exact component={Home} />
  	        <FrontendLayout path="/shop" component={Shop} />
            <FrontendLayout path="/login" component={Login} />
  	        <FrontendLayout component={PageNotFound} />
     		</Switch>
      </Router>
    </Provider>
  );
}

export default App;