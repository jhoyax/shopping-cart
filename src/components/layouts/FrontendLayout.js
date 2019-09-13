import React from 'react';
import { Route } from "react-router-dom";

// Import components
import Header from '../partials/Header';
import Footer from '../partials/Footer';

function FrontendLayout({children}) {
	return (
		<React.Fragment>
			<Header />
				{children}
			<Footer />
		</React.Fragment>
	);
}

function FrontendRoute({component: Component, ...rest}) {
	return (
		<Route {...rest} render={matchProps => (
			<FrontendLayout>
				<Component {...matchProps} />  
			</FrontendLayout>
		)} />  
	);
}

export default FrontendRoute;