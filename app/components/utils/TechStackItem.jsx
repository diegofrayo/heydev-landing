import React, {
	PropTypes
} from 'react';

const TechStackItem = ({ image }) => (
	<article style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', margin: '5px' }}>
		<img style={{ width: '100px', height: 100 }} src={image.src} title={image.title} alt={image.title} />
	</article>
);

TechStackItem.propTypes = {
	image: PropTypes.shape({
		src: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}).isRequired
};

export default TechStackItem;