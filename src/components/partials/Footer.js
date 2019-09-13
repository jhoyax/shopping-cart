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

// Import utils
import LinkHelpers from '../../utils/LinkHelpers';

function Footer() {
	return (
		<footer>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <ul className="list-links">
                            <li className="h5">Company</li>
                            <li><a href={LinkHelpers.setAbsolutePath('/about-us')}>About Us</a></li>
                            <li><a href={LinkHelpers.setAbsolutePath('/contact-us')}>Contact Us</a></li>
                            <li><a href={LinkHelpers.setAbsolutePath('/news')}>News</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <ul className="list-links">
                            <li className="h5">Categories</li>
                            <li><a href={LinkHelpers.setAbsolutePath('/electronics')}>Electronics</a></li>
                            <li><a href={LinkHelpers.setAbsolutePath('/sports')}>Sports</a></li>
                            <li><a href={LinkHelpers.setAbsolutePath('/fashion')}>Fashion</a></li>
                            <li><a href={LinkHelpers.setAbsolutePath('/health')}>Health</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <ul className="list-links">
                            <li className="h5">Support</li>
                            <li><a href={LinkHelpers.setAbsolutePath('/terms')}>Terms &amp; Conditions</a></li>
                            <li><a href={LinkHelpers.setAbsolutePath('/privacy-policy')}>Privacy Policy</a></li>
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