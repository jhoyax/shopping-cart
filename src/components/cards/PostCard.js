import React from 'react';

// Import bootstrap
import { 
	Card
} from 'react-bootstrap';

// Import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PostCard(props) {
	return(
    	<Card className="card-post">
		  	<Card.Body>
		  		<FontAwesomeIcon icon={props.icon} className="icon-card" />
			    <Card.Title>{props.title}</Card.Title>
			    <Card.Text>
			      {props.description}
			    </Card.Text>
			    <a href={props.link} className="btn btn-outline-dark">Read More</a>
			</Card.Body>
		</Card>
	);
}
export default PostCard;