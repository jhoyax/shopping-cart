import React from 'react';

// Import components
import LoginForm from '../forms/LoginForm';

// Import bootstrap
import { 
	Container,
	Row,
	Col,
	Card
} from 'react-bootstrap';

// Import fontawesome
import { 
    faSignInAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import utils
import LinkHelpers from '../../utils/LinkHelpers';

function Login() {
	return (
		<div className="content">
			<div className="section section-login">
				<Container>
				<Row className="justify-content-center">
					<Col md={6}>
						<Card>
							<Card.Header><FontAwesomeIcon icon={faSignInAlt} /> Login</Card.Header>
							<Card.Body>
								<LoginForm />
								<div>
									<a href={LinkHelpers.setAbsolutePath('/forgot-password')} className="float-left">Forgot Password?</a>
									<a href={LinkHelpers.setAbsolutePath('/sign-up')} className="float-right">Sign Up</a>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				</Container>
			</div>
		</div>
	);
}

export default Login;