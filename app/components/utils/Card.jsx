/**
 * Created by lejoss on 6/13/16.
 */

import React, {
	PropTypes
} from 'react';

const Card = ({
	children
}) => (
	<div style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)', background: 'white', display: 'flex', color: 'white', width: '60%', margin: 'auto' }}>
		{children}
	</div>
);

Card.propTypes = {
	children: PropTypes.element
};

export default Card;