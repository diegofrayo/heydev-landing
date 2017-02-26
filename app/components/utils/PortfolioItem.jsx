import React, {
	PropTypes
} from 'react';

const PortfolioItem = ({
	project: {
		description,
		imgSrc,
		link,
		name,
		techStack
	}
}) => (
	<article>
		{description}
		{imgSrc}
		{link}
		{name}
		{techStack}
	</article>
);

PortfolioItem.propTypes = {
	project: PropTypes.shape({
		description: PropTypes.string.isRequired,
		imgSrc: PropTypes.string.isRequired,
		link: PropTypes.string,
		name: PropTypes.string.isRequired,
		techStack: PropTypes.string.isRequired
	}).isRequired
};

export default PortfolioItem;