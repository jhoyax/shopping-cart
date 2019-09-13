import React from 'react';

// Import components
import PostCard from '../cards/PostCard';

// Import bootstrap
import { 
	Carousel,
	Container,
	Row,
	Col
} from 'react-bootstrap';

// Import fontawesome
import { 
    faHeartbeat,
    faVolleyballBall,
    faTshirt,
    faLaptop
} from '@fortawesome/free-solid-svg-icons';

// Import utils
import LinkHelpers from '../../utils/LinkHelpers';

function Home() {
	return (
		<div className="content">
			<Carousel>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="https://picsum.photos/id/326/800/400"
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>Health</h3>
			      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="https://picsum.photos/id/0/800/400"
			      alt="First slide"
			    />
			    <Carousel.Caption>
			      <h3>Electronics</h3>
			      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="https://picsum.photos/id/1058/800/400"
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>Sports</h3>
			      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img
			      className="d-block w-100"
			      src="https://picsum.photos/id/535/800/400"
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h3>Fashion</h3>
			      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
			<div className="section">
				<Container>
                	<h2 className="text-center text-dark">Categories</h2>
					<Row>
					    <Col md={6} lg={3}>
					    	<PostCard 
					    		icon={faVolleyballBall}
					    		title="Sports"
					    		description="Some quick example text to build on the card title and make up the bulk of the card's content."
					    		link={LinkHelpers.setAbsolutePath('/sports')}
					    	/>
					    </Col>
					    <Col md={6} lg={3}>
					    	<PostCard 
					    		icon={faTshirt}
					    		title="Fashion"
					    		description="Some quick example text to build on the card title and make up the bulk of the card's content."
					    		link={LinkHelpers.setAbsolutePath('/fashion')}
					    	/>
					    </Col>
					    <Col md={6} lg={3}>
					    	<PostCard 
					    		icon={faLaptop}
					    		title="Electronics"
					    		description="Some quick example text to build on the card title and make up the bulk of the card's content."
					    		link={LinkHelpers.setAbsolutePath('/electronics')}
					    	/>
					    </Col>
					    <Col md={6} lg={3}>
					    	<PostCard 
					    		icon={faHeartbeat}
					    		title="Health"
					    		description="Some quick example text to build on the card title and make up the bulk of the card's content."
					    		link={LinkHelpers.setAbsolutePath('/health')}
					    	/>
					    </Col>
					</Row>
				</Container>
			</div>
		</div>
	);
	
}
export default Home;