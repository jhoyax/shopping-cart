import React from 'react';

// Import components
import ProductCard from '../cards/ProductCard';

// Import bootstrap
import { 
	Row,
	Col,
	Container
} from 'react-bootstrap';

function Shop() {
	return (
		<div className="content">
			<div className="section">
				<Container>
					<h1 className="text-dark">Shop</h1>
					<Row>
					    <Col md={6} lg={3} className="mb-4">
					    	<ProductCard 
					    		imageUrl="https://placekitten.com/286/180"
					    		title="Card Title"
					    		description="Some quick example text to build on the card title and make up the bulk of the card's content."
					    	/>
					    </Col>
					    <Col md={6} lg={3} className="mb-4">
					    	<ProductCard 
					    		imageUrl="https://placekitten.com/286/180"
					    		title="Card Title"
					    		description="Some quick example text to build on the card title and make up the bulk of the card's content."
					    	/>
					    </Col>
					    <Col md={6} lg={3} className="mb-4">
					    	<ProductCard 
					    		imageUrl="https://placekitten.com/286/180"
					    		title="Card Title"
					    		description="Some quick example text to build on the card title and make up the bulk of the card's content."
					    	/>
					    </Col>
					    <Col md={6} lg={3} className="mb-4">
					    	<ProductCard 
					    		imageUrl="https://placekitten.com/286/180"
					    		title="Card Title"
					    		description="Some quick example text to build on the card title and make up the bulk of the card's content."
					    	/>
					    </Col>

					    <Col md={6} lg={3} className="mb-4">
					    	<ProductCard 
					    		imageUrl="https://placekitten.com/286/180"
					    		title="Card Title"
					    		description="Some quick example text to build on the card title and make up the bulk of the card's content."
					    	/>
					    </Col>
					    <Col md={6} lg={3} className="mb-4">
					    	<ProductCard 
					    		imageUrl="https://placekitten.com/286/180"
					    		title="Card Title"
					    		description="Some quick example text to build on the card title and make up the bulk of the card's content."
					    	/>
					    </Col>
					    <Col md={6} lg={3} className="mb-4">
					    	<ProductCard 
					    		imageUrl="https://placekitten.com/286/180"
					    		title="Card Title"
					    		description="Some quick example text to build on the card title and make up the bulk of the card's content."
					    	/>
					    </Col>
					    <Col md={6} lg={3} className="mb-4">
					    	<ProductCard 
					    		imageUrl="https://placekitten.com/286/180"
					    		title="Card Title"
					    		description="Some quick example text to build on the card title and make up the bulk of the card's content."
					    	/>
					    </Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}
export default Shop;