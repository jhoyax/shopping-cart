import React from 'react';

// Import bootstrap
import { 
	Carousel,
	Container,
	Row,
	Col,
	Card
} from 'react-bootstrap';

// Import fontawesome
import { 
    faHeartbeat,
    faVolleyballBall,
    faTshirt,
    faLaptop
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
	return (
		<div className="content">
			<Carousel>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="https://picsum.photos/id/0/800/400"
			      alt="First slide"
			    />
			    <Carousel.Caption>
			      <h3>Electronics</h3>
			      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="https://picsum.photos/id/326/800/400"
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>Health</h3>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="https://picsum.photos/id/1058/800/400"
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>Sports</h3>
			      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="https://picsum.photos/id/535/800/400"
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>Fashion</h3>
			      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
			<div className="section">
				<Container>
                	<h2 className="text-center text-dark">Categories</h2>
					<Row>
					    <Col md={6} lg={3}>
					    	<Card className="card-post">
							  	<Card.Body>
							  		<FontAwesomeIcon icon={faVolleyballBall} className="icon-card" />
								    <Card.Title>Sports</Card.Title>
								    <Card.Text>
								      Some quick example text to build on the card title and make up the bulk of
								      the card's content.
								    </Card.Text>
								    <a href="/sports" className="btn btn-outline-dark">Read More</a>
								</Card.Body>
							</Card>
					    </Col>
					    <Col md={6} lg={3}>
					    	<Card className="card-post">
							  	<Card.Body>
							  		<FontAwesomeIcon icon={faTshirt} className="icon-card" />
								    <Card.Title>Fashion</Card.Title>
								    <Card.Text>
								      Some quick example text to build on the card title and make up the bulk of
								      the card's content.
								    </Card.Text>
								    <a href="/fashion" className="btn btn-outline-dark">Read More</a>
								</Card.Body>
							</Card>
					    </Col>
					    <Col md={6} lg={3}>
					    	<Card className="card-post">
							  	<Card.Body>
							  		<FontAwesomeIcon icon={faLaptop} className="icon-card" />
								    <Card.Title>Electronics</Card.Title>
								    <Card.Text>
								      Some quick example text to build on the card title and make up the bulk of
								      the card's content.
								    </Card.Text>
								    <a href="/electronics" className="btn btn-outline-dark">Read More</a>
								</Card.Body>
							</Card>
					    </Col>
					    <Col md={6} lg={3}>
					    	<Card className="card-post">
							  	<Card.Body>
							  		<FontAwesomeIcon icon={faHeartbeat} className="icon-card" />
								    <Card.Title>Health</Card.Title>
								    <Card.Text>
								      Some quick example text to build on the card title and make up the bulk of
								      the card's content.
								    </Card.Text>
								    <a href="/health" className="btn btn-outline-dark">Read More</a>
								</Card.Body>
							</Card>
					    </Col>
					</Row>
				</Container>
			</div>
		</div>
	);
	
}
export default Home;