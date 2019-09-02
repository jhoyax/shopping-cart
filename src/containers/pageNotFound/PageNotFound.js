import React from 'react';

// Import bootstrap
import { 
	Container
} from 'react-bootstrap';

// Import fontawesome
import { 
    faLongArrowAltLeft,
    faHeartBroken
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PageNotFound() {
	return (
		<div class="content">
			<div class="section section-404">
				<Container>
					<FontAwesomeIcon icon={faHeartBroken} className="icon-404" />
					<h1 className="text-dark">The page you were looking for doesn't exist</h1>
					<a href="/" className="btn btn-secondary">
						<FontAwesomeIcon icon={faLongArrowAltLeft} /> Back to Home
					</a>
				</Container>
			</div>
		</div>
	);
	
}
export default PageNotFound;