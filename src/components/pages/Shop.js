import React from 'react';

// Import redux
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/modules/products/Actions';

// Import components
import ProductCard from '../cards/ProductCard';
import Pagination from "react-js-pagination";

// Import bootstrap
import { 
	Row,
	Col,
	Container,
	Spinner
} from 'react-bootstrap';

class Shop extends React.Component {
	state = {
		isLoading: false
	}

	componentDidMount() {
		this.handleFetchProducts();
	}

	handleFetchProducts = (currentPage = 1) => {
		this.setState({ isLoading: true });

		this.props.fetchProducts(this.props.perPage, currentPage, () => {
			this.setState({ isLoading: false });
		});
		
	}

	handlePageChange = (currentPage) => {
		this.handleFetchProducts(currentPage);
	}

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
								<div className="text-center">
									<Pagination
										activePage={this.props.products.meta.current_page}
										itemsCountPerPage={this.props.perPage}
										totalItemsCount={this.props.products.meta.total}
										pageRangeDisplayed={10}
										onChange={this.handlePageChange}
										itemClass="page-item"
										linkClass="page-link"
										/>
								</div>
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