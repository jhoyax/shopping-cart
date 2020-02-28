import React from 'react';

// Import Redux
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/modules/cart/Actions';
import { fetchProductDetails } from '../../redux/modules/products/Actions';

// Import bootstrap
import { 
	Row,
	Col,
	Spinner,
	Image,
	Button,
	Form
} from 'react-bootstrap';

class ProductDetails extends React.Component {

	state = {
		isLoading: false,
		quantity: 1
	}

	componentDidMount() {
		this.handleFetchProductDetails(this.props.match.params.slug);
	}

	handleFetchProductDetails = (slug) => {
		this.setState({ isLoading: true });

		this.props.fetchProductDetails(slug, () => {
			this.setState({ isLoading: false });
		});
		
	}

	handleAddToCart = () => {

		this.props.addCartItem({
			id: this.props.productDetails.data.id,
			name: this.props.productDetails.data.title,
			quantity: this.state.quantity,
			price: this.props.productDetails.data.price
		});
	}

	handleChangeQuantity = (e) => {
		this.setState({quantity: parseInt(e.target.value)});
	}

	render () {
		return (
			<div class="content">
				<div class="section">
					<div class="container">
					{
						this.state.isLoading && 
						<Spinner animation="grow" />
					}
					{
						this.props.productDetails &&
						<React.Fragment>
							<Row>
								<Col md={4}>
									<Image src={this.props.productDetails.data.image.url} alt={this.props.productDetails.data.image.name} fluid />
								</Col>
								<Col md={8}>
									<h1 class="text-dark">{ this.props.productDetails.data.title }</h1>

									<Row className="mb-3">
										<Col xs={12}>
											<label>Date Published: {this.props.productDetails.data.created_at}</label>
										</Col>
									</Row>
									<Row className="mb-3">
										<Col md={3}>
											<label>Price:</label>
											<div>
												<label class="product-price">${this.props.productDetails.data.price.toFixed(2)}</label>
											</div>
										</Col>
										<Col md={9}>
											<label>Quantity:</label>
											<div>
												<Form.Control type="number" min="1" placeholder="Quantity" defaultValue={this.state.quantity} onChange={this.handleChangeQuantity.bind(this)} className="product-quantity" />
											</div>
										</Col>
									</Row>
									<Row className="mb-3">
										<Col xs={12}>
											<Button variant="dark" onClick={this.handleAddToCart} disabled={this.state.isLoading}>
												Add to Cart
											</Button>
										</Col>
									</Row>
									<Row>
										<Col xs={12}>
											{this.props.productDetails.data.description}
										</Col>
									</Row>
								</Col>
							</Row>
						</React.Fragment>
					}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	productDetails: state.products.details.data
});

export default connect(
	mapStateToProps, 
	{fetchProductDetails, addCartItem}
)(ProductDetails);