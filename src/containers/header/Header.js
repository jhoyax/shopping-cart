import React from 'react';

// Import bootstrap
import { 
	Navbar, 
	Nav, 
	Container,
	Badge
} from 'react-bootstrap';

// Import fontawesome
import { 
    faShoppingBasket,
    faShoppingBag,
    faSignInAlt,
    faBars
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
				  <Navbar.Toggle aria-controls="basic-navbar-nav">
				  	<FontAwesomeIcon icon={faBars} />
				  </Navbar.Toggle>
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="ml-auto">
				      <Nav.Link href={LinkHelpers.setAbsolutePath('/')}>Home</Nav.Link>
				      <Nav.Link href={LinkHelpers.setAbsolutePath('/shop')}>Shop</Nav.Link>
				      <Nav.Link href={LinkHelpers.setAbsolutePath('/about-us')}>About Us</Nav.Link>
				      <Nav.Link href={LinkHelpers.setAbsolutePath('/contact-us')}>Contact Us</Nav.Link>
				      <Nav.Link href={LinkHelpers.setAbsolutePath('/cart')} className="nav-cart">
				      	<FontAwesomeIcon icon={faShoppingBag} />
				      	&nbsp;Cart
				      	<Badge variant="light" className="count">0</Badge>
				      </Nav.Link>
				      <Nav.Link href={LinkHelpers.setAbsolutePath('/login')}><FontAwesomeIcon icon={faSignInAlt} /> Login</Nav.Link>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
            </Container>
		</header>
	);
}

export default Header;