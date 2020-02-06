import React from 'react';

// Import redux
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/modules/products/Actions';

// Import components
import ProductCard from '../cards/ProductCard';
import SidebarCategory from '../partials/SidebarCategory';
import Pagination from "react-js-pagination";

// Import bootstrap
import { 
	Row,
	Col,
	Container,
	Spinner,
	Form
} from 'react-bootstrap';

class Shop extends React.Component {
	state = {
		isLoading: false,
		category: '',
		sort: '',
		currentPage: 1
	}

	componentDidMount() {
		this.handleFetchProducts();
	}

	handleFetchProducts = (currentPage = 1, category = '', sort = '') => {
		this.setState({ isLoading: true });
		this.setState({ category: category });
		this.setState({ currentPage: currentPage });
		this.setState({ sort: sort });

		this.props.fetchProducts(category, sort, this.props.perPage, currentPage, () => {
			this.setState({ isLoading: false });
		});
		
	}

	handlePaginationChange = (currentPage) => {
		this.handleFetchProducts(currentPage, this.state.category, this.state.sort);
	}

	handleSortChange = (e) => {
		this.handleFetchProducts(this.state.currentPage, this.state.category, e.target.value);
	}

	productList = () => {
		if (this.props.products.data.length) {
			return this.props.products.data.map(product => {
			  return (
				  <Col md={6} lg={4} className="mb-3" key={'col-' + product.id}>
					  <ProductCard 
						  imageUrl={product.image.url}
						  id={product.id}
						  title={product.title}
						  slug={product.slug}
						  description={product.description}
						  price={product.price}
						  isLoading={this.state.isLoading}
						  dateCreated={product.created_at}
					  />
				  </Col>
			  );
			});
		} else {
			return (
				<Col xs={12} className="mb-3">No Result.</Col>
			);
		}
	};

	render() {
		return (
			<div className="content">
				<div className="section">
					<Container>
						<h1 className="text-dark">Shop</h1>

						<Row>
						<Col md={3}>
							<SidebarCategory fetchProducts={this.handleFetchProducts} sort={this.state.sort} />
						</Col>
						<Col md={9}>
							{
								this.state.isLoading && 
								<Spinner animation="grow" />
							}

							{
								this.props.products &&
								<React.Fragment>
									<div className="d-flex justify-content-end shop-filter">
										<Form.Control as="select" className="w-auto" onChange={this.handleSortChange}>
											<option value="">Sort By</option>
											<option value="price-asc">Price Low to High</option>
											<option value="price-desc">Price High to Low</option>
											<option value="title-asc">Title A-Z</option>
											<option value="title-desc">Title Z-A</option>
											<option value="date-desc">Most Recent</option>
											<option value="date-asc">Oldest First</option>
										</Form.Control>
									</div>
									<Row>
										{this.productList()}
									</Row>
									<div className="text-center">
										<Pagination
											activePage={this.props.products.meta.current_page}
											itemsCountPerPage={this.props.perPage}
											totalItemsCount={this.props.products.meta.total}
											pageRangeDisplayed={10}
											onChange={this.handlePaginationChange}
											itemClass="page-item"
											linkClass="page-link"
											/>
									</div>
								</React.Fragment>
							}
						</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	products: state.products.lists.data,
	perPage: state.products.perPage
});

export default connect(
	mapStateToProps,
	{fetchProducts}
)(Shop);