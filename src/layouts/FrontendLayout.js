import React from 'react';
import { Route } from "react-router-dom";

import Header from '../components/header';

function FrontendLayout({children}) {
	return (
		<React.Fragment>
			<Header />
			{children}
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