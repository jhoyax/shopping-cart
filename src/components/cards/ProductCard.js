import React from 'react';

// Import redux
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/modules/cart/Actions';

// Import bootstrap
import { 
	Card,
	Button
} from 'react-bootstrap';

// Import utils
import LinkHelpers from '../../utils/LinkHelpers';

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
				    <Card.Title>
						<a href={LinkHelpers.setAbsolutePath('/products/' + this.props.slug)}>{this.props.title}</a>
					</Card.Title>
					<small className="card-date">{this.props.dateCreated}</small>
				    <Card.Text>
				      {this.props.description}
				    </Card.Text>
			  	</Card.Body>
				<Card.Footer>
					<label className="card-price">${this.props.price.toFixed(2)}</label>
					<Button variant="dark" block onClick={this.handleAddToCart} disabled={this.props.isLoading}>
						Add to Cart
					</Button>
				</Card.Footer>
			</Card>
		);
	}
}

export default connect(
	null,
	{ addCartItem }
)(ProductCard);