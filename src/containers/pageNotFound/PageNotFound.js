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

// Import utils
import LinkHelpers from '../../utils/LinkHelpers';

function PageNotFound() {
	return (
		<div class="content">
			<div class="section section-404">
				<Container>
					<FontAwesomeIcon icon={faHeartBroken} className="icon-404" />
					<h3 className="text-secondary">The page you were looking for doesn't exist</h3>
					<a href={LinkHelpers.setAbsolutePath('/')} className="btn btn-dark">
						<FontAwesomeIcon icon={faLongArrowAltLeft} /> Back to Home
					</a>
				</Container>
			</div>
		</div>
	);
	
}
export default PageNotFound;