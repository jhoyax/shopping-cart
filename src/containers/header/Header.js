import React from 'react';

// Import bootstrap
import { 
	Navbar, 
	Nav, 
	Form, 
	FormControl, 
	Button,
	Container
} from 'react-bootstrap';

// Import fontawesome
import { 
    faShoppingBasket 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import utis
import LinkHelpers from '../../utils/LinkHelpers';

function Header() {
	return (
		<header>
            <Container>
				<Navbar bg="dark" expand="lg" variant="dark">
				  <Navbar.Brand href={LinkHelpers.setAbsolutePath('/')}><FontAwesomeIcon icon={faShoppingBasket} className="icon-brand" /></Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
				      <Nav.Link href={LinkHelpers.setAbsolutePath('/')}>Home</Nav.Link>
				      <Nav.Link href={LinkHelpers.setAbsolutePath('/shop')}>Shop</Nav.Link>
				      <Nav.Link href={LinkHelpers.setAbsolutePath('/about-us')}>About Us</Nav.Link>
				      <Nav.Link href={LinkHelpers.setAbsolutePath('/contact-us')}>Contact Us</Nav.Link>
				    </Nav>
				    <Form inline>
				      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
				      <Button variant="outline-light">Search</Button>
				    </Form>
				  </Navbar.Collapse>
				</Navbar>
            </Container>
		</header>
	);
}

export default Header;