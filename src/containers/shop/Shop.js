import React from 'react';

// Import bootstrap
import { 
	Row,
	Col,
	Card,
	Container
} from 'react-bootstrap';

function Shop() {
	return (
		<div className="content">
			<div className="section">
				<Container>
					<h1 className="text-dark">Shop</h1>
					<Row>
					    <Col md={6} lg={3} className="product">
					    	<Card className="card-product">
							  <Card.Img variant="top" src="https://dummyimage.com/286x180/" />
							  <Card.Body>
							    <Card.Title>Card Title</Card.Title>
							    <Card.Text>
							      Some quick example text to build on the card title and make up the bulk of
							      the card's content.
							    </Card.Text>
							    <a href="/product" className="btn btn-secondary btn-block">Add to Cart</a>
							  </Card.Body>
							</Card>
					    </Col>
					    <Col md={6} lg={3} className="product">
					    	<Card className="card-product">
							  <Card.Img variant="top" src="https://dummyimage.com/286x180/" />
							  <Card.Body>
							    <Card.Title>Card Title</Card.Title>
							    <Card.Text>
							      Some quick example text to build on the card title and make up the bulk of
							      the card's content.
							    </Card.Text>
							    <a href="/product" className="btn btn-secondary btn-block">Add to Cart</a>
							  </Card.Body>
							</Card>
					    </Col>
					    <Col md={6} lg={3} className="product">
					    	<Card className="card-product">
							  <Card.Img variant="top" src="https://dummyimage.com/286x180/" />
							  <Card.Body>
							    <Card.Title>Card Title</Card.Title>
							    <Card.Text>
							      Some quick example text to build on the card title and make up the bulk of
							      the card's content.
							    </Card.Text>
							    <a href="/product" className="btn btn-secondary btn-block">Add to Cart</a>
							  </Card.Body>
							</Card>
					    </Col>
					    <Col md={6} lg={3} className="product">
					    	<Card className="card-product">
							  <Card.Img variant="top" src="https://dummyimage.com/286x180/" />
							  <Card.Body>
							    <Card.Title>Card Title</Card.Title>
							    <Card.Text>
							      Some quick example text to build on the card title and make up the bulk of
							      the card's content.
							    </Card.Text>
							    <a href="/product" className="btn btn-secondary btn-block">Add to Cart</a>
							  </Card.Body>
							</Card>
					    </Col>

					    <Col md={6} lg={3} className="product">
					    	<Card className="card-product">
							  <Card.Img variant="top" src="https://dummyimage.com/286x180/" />
							  <Card.Body>
							    <Card.Title>Card Title</Card.Title>
							    <Card.Text>
							      Some quick example text to build on the card title and make up the bulk of
							      the card's content.
							    </Card.Text>
							    <a href="/product" className="btn btn-secondary btn-block">Add to Cart</a>
							  </Card.Body>
							</Card>
					    </Col>
					    <Col md={6} lg={3} className="product">
					    	<Card className="card-product">
							  <Card.Img variant="top" src="https://dummyimage.com/286x180/" />
							  <Card.Body>
							    <Card.Title>Card Title</Card.Title>
							    <Card.Text>
							      Some quick example text to build on the card title and make up the bulk of
							      the card's content.
							    </Card.Text>
							    <a href="/product" className="btn btn-secondary btn-block">Add to Cart</a>
							  </Card.Body>
							</Card>
					    </Col>
					    <Col md={6} lg={3} className="product">
					    	<Card className="card-product">
							  <Card.Img variant="top" src="https://dummyimage.com/286x180/" />
							  <Card.Body>
							    <Card.Title>Card Title</Card.Title>
							    <Card.Text>
							      Some quick example text to build on the card title and make up the bulk of
							      the card's content.
							    </Card.Text>
							    <a href="/product" className="btn btn-secondary btn-block">Add to Cart</a>
							  </Card.Body>
							</Card>
					    </Col>
					    <Col md={6} lg={3} className="product">
					    	<Card className="card-product">
							  <Card.Img variant="top" src="https://dummyimage.com/286x180/" />
							  <Card.Body>
							    <Card.Title>Card Title</Card.Title>
							    <Card.Text>
							      Some quick example text to build on the card title and make up the bulk of
							      the card's content.
							    </Card.Text>
							    <a href="/product" className="btn btn-secondary btn-block">Add to Cart</a>
							  </Card.Body>
							</Card>
					    </Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default Shop;