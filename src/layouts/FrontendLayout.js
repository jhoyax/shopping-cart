import React from 'react';
import { Route } from "react-router-dom";

// Import containers
import Header from '../containers/header';
import Footer from '../containers/footer';

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