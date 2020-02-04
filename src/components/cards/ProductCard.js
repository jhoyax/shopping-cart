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
			id: this.props.id,
			name: this.props.title,
			quantity: 1,
			price: this.props.price
		});
	}

	render() {
		return (
	    	<Card className="card-product">
			  	<Card.Img variant="top" src={this.props.imageUrl} />
			  	<Card.Body>
				    <Card.Title title={this.props.title}>{this.props.title}</Card.Title>
				    <Card.Text>
				      {this.props.description}
				    </Card.Text>
					<label className="card-price">${this.props.price.toFixed(2)}</label>
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