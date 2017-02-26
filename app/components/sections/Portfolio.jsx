import React, {
	PropTypes
} from 'react';

import PortfolioItem from 'components/utils/PortfolioItem.jsx';

const Portfolio = ({ projects }) => (
	<section style={{ height: '100vh', display: 'flex', flex: 1, backgroundColor: '#E0E0E0' }}>
		{projects.map((p, key) => <PortfolioItem project={p} key={key} />)}
	</section>
);

Portfolio.propTypes = {
	projects: PropTypes.array.isRequired
};

export default Portfolio;