/**
 * Created by lejoss on 7/5/16.
 */

import React, {
	PropTypes
} from 'react';

const PersonInfo = ({
	person: {
		name,
		description,
		imgSrc
	}
}) => (
	<article style={{ display: 'flex', flex: 1, flexDirection: 'column', margin: '5px', padding: '8px' }}>
		<div>
			<img style={{ backgroundSize: 'cover', height: '100px', width: '100px', borderRadius: '50px' }} src={imgSrc} alt="" />
		</div>
		<div style={{ display: 'flex', color: '#222', fontWeight: '700' }}>
			<h2>{name}</h2>
		</div>
		<div style={{ display: 'flex', flex: 1, fontSize: '16px', color: '#616161' }}>
			<p>
				{description}
			</p>
		</div>
	</article>
);

PersonInfo.propTypes = {
	person: PropTypes.shape({
		description: PropTypes.string.isRequired,
		imgSrc: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired
	}).isRequired
};

export default PersonInfo;