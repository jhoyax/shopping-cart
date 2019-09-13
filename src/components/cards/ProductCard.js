import React from 'react';

// Import redux
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/modules/cart/Actions';

// Import bootstrap
import { 
	Card,
	Button
} from 'react-bootstrap';

class ProductCard extends React.Component {

	handleAddToCart = () => {

		this.props.addCartItem({
			id: 23,
			name: 'Product 1',
			quantity: 2,
			price: 23.50
		});
	}

	render() {
		return (
	    	<Card className="card-product">
			  	<Card.Img variant="top" src={this.props.imageUrl} />
			  	<Card.Body>
				    <Card.Title>{this.props.title}</Card.Title>
				    <Card.Text>
				      {this.props.description}
				    </Card.Text>
				  	<Button variant="dark" block onClick={this.handleAddToCart}>
				    	Add to Cart
				  	</Button>
			  	</Card.Body>
			</Card>
		);
	}
}

export default connect(
	null,
	{ addCartItem }
)(ProductCard);