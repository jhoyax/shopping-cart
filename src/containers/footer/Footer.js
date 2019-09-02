import React from 'react';

// Import bootstrap
import { 
    Container,
    Row, 
    Col
} from 'react-bootstrap';

// Import fontawesome
import { 
    faCcVisa,
    faCcMastercard,
    faCcAmex,
    faCcDiscover,
    faCcPaypal 
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
	return (
		<footer>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <ul className="list-links">
                            <li className="h5">Company</li>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                            <li><a href="/news">News</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <ul className="list-links">
                            <li className="h5">Categories</li>
                            <li><a href="/electronics">Electronics</a></li>
                            <li><a href="/sports">Sports</a></li>
                            <li><a href="/fashion">Fashion</a></li>
                            <li><a href="/fashion">Health</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <ul className="list-links">
                            <li className="h5">Support</li>
                            <li><a href="/terms">Terms &amp; Conditions</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <ul>
                            <li className="h5">Methods of Payment
                                <ul className="list-inline">
                                    <li><FontAwesomeIcon icon={faCcVisa} className="icon-payment" /></li>
                                    <li><FontAwesomeIcon icon={faCcMastercard} className="icon-payment" /></li>
                                    <li><FontAwesomeIcon icon={faCcAmex} className="icon-payment" /></li>
                                    <li><FontAwesomeIcon icon={faCcDiscover} className="icon-payment" /></li>
                                    <li><FontAwesomeIcon icon={faCcPaypal} className="icon-payment" /></li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className='copyright'>
                <Row>
                    <Col>
                        <p className="text-center">Copyright © {new Date().getFullYear()} Shopping Cart. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
	);
}

export default Footer;