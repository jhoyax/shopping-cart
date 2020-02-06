import React from 'react';

// Import redux
import { connect } from 'react-redux';
import { fetchProductCategories } from '../../redux/modules/product-categories/Actions';

// Import bootstrap
import { 
	Spinner
} from 'react-bootstrap';

// Import utils
import LinkHelpers from '../../utils/LinkHelpers';

class SidebarCategory extends React.Component {
	state = {
		isLoading: false
	}

	componentDidMount() {
		this.handleFetchProductCategories();
	}

	handleFetchProductCategories = () => {
		this.setState({ isLoading: true });

		this.props.fetchProductCategories(() => {
			this.setState({ isLoading: false });
		});
		
    }

    handleAnchorClick = (id, e) => {
        e.preventDefault();

        // remove all active class if exist
        if (document.querySelectorAll('.sidebar .active').length) {
            document.querySelectorAll('.sidebar .active').forEach(element => {
                element.classList.remove("active");
            });
        }
        
        // add class active
        e.target.classList.add("active");

        this.props.fetchProducts(1, id, this.props.sort);
    }

    topParentCategory = () => {
        return this.props.productCategories.data.map(productCategory => {
          return (
            <li key={'col-' + productCategory.id}>
                <a href="#" onClick={this.handleAnchorClick.bind(this, productCategory.id)}>
                    {productCategory.title} <span className="product-total">({productCategory.totalProduct})</span>
                </a>
                { productCategory.children.length > 0 && this.childrenCategory(productCategory)}
            </li>
          );
        });
    }

    childrenCategory = (productCategory) => {
        return (
            <ul className="sub-category">
                {
                    productCategory.children.map(category => {
                        return (
                            <li key={'col-' + category.id}>
                                <a href="#" onClick={this.handleAnchorClick.bind(this, category.id)}>
                                    {category.title} <span className="product-total">({category.totalProduct})</span>
                                </a>
                                { category.children.length > 0 && this.childrenCategory(category)}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
    
    render() {
        return (
            <div className="sidebar">
                <h5><a href="#" onClick={this.handleAnchorClick.bind(this, '')}>All Categories</a></h5>
                {
                    this.state.isLoading && 
                    <Spinner animation="grow" />
                }
                {
                    this.props.productCategories &&
                    <React.Fragment>
                        <ul className="top-category">
                            {this.topParentCategory()}
                        </ul>
                    </React.Fragment>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
	productCategories: state.productCategories.lists.data
});

export default connect(
	mapStateToProps,
    {fetchProductCategories}
)(SidebarCategory);