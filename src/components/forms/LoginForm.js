import React from 'react';

// Import bootstrap
import { 
	Form,
	Button
} from 'react-bootstrap';

function LoginForm() {
	return (
		<Form>
		  	<Form.Group controlId="formBasicEmail">
			    <Form.Label>Email address</Form.Label>
			    <Form.Control type="email" placeholder="Enter email" required />
		  	</Form.Group>

		  	<Form.Group controlId="formBasicPassword">
			    <Form.Label>Password</Form.Label>
			    <Form.Control type="password" placeholder="Password" required />
		  	</Form.Group>
		  	<Form.Group controlId="formBasicChecbox">
		    	<Form.Check type="checkbox" label="Remember me" />
		  	</Form.Group>
		  	<Button variant="dark" type="submit" block>
		    	Login
		  	</Button>
		</Form>
	);
}

export default LoginForm;