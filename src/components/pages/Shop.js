import React from 'react';

// Import redux
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/modules/products/Actions';

// Import components
import ProductCard from '../cards/ProductCard';

// Import bootstrap
import { 
	Row,
	Col,
	Container,
	Pagination,
	Spinner
} from 'react-bootstrap';

class Shop extends React.Component {
	state = {
		isLoading: false
	}

	componentDidMount() {
		this.handleFetchProducts();
	}

	handleFetchProducts = () => {
		this.setState({ isLoading: true });

		this.props.fetchProducts(this.props.perPage, this.props.currentPage, () => {
			this.setState({ isLoading: false });
		});
		
	};

	productList = () => {
	  	return this.props.products.data.map(product => {
			return (
				<Col md={6} lg={3} className="mb-4" key={'col-' + product.id}>
					<ProductCard 
						imageUrl="https://placekitten.com/286/180"
						id={product.id}
						title={product.title}
						description={product.description}
						price={product.price}
					/>
				</Col>
			);
	  	});
	};

	render() {
		return (
			<div className="content">
				<div className="section">
					<Container>
						<h1 className="text-dark">Shop</h1>

						{
							this.state.isLoading && 
							<Spinner animation="grow" />
						}

						{
							this.props.products &&
							<React.Fragment>
								<Row>
									{this.productList()}
								</Row>
								<Pagination>
									<Pagination.First />
									<Pagination.Prev />
									<Pagination.Item>{1}</Pagination.Item>
									<Pagination.Ellipsis />

									<Pagination.Item>{10}</Pagination.Item>
									<Pagination.Item>{11}</Pagination.Item>
									<Pagination.Item active>{12}</Pagination.Item>
									<Pagination.Item>{13}</Pagination.Item>
									<Pagination.Item disabled>{14}</Pagination.Item>

									<Pagination.Ellipsis />
									<Pagination.Item>{20}</Pagination.Item>
									<Pagination.Next />
									<Pagination.Last />
								</Pagination>
							</React.Fragment>
						}
					</Container>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	products: state.products.lists.data,
	perPage: state.products.perPage,
	currentPage: state.products.currentPage
});

export default connect(
	mapStateToProps,
	{fetchProducts}
)(Shop);