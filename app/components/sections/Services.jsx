import React, {
	PropTypes
} from 'react';

import ServiceInfo from 'components/utils/ServiceInfo.jsx';
import TechStackItem from 'components/utils/TechStackItem.jsx';

const Services = ({
	services,
	techStack
}) => (
	<section style={{ height: '100vh', display: 'flex', flex: 1, backgroundColor: '#eee' }}>
		<div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
			<div style={{ display: 'flex', flex: 1 }}>
				{services.map((s, key) => <ServiceInfo service={s} key={key} />)}
			</div>
			<div style={{ display: 'flex', flex: 1, flexFlow: 'row wrap' }}>
				{techStack.map((t, key) => <TechStackItem image={t} key={key} />)}
			</div>
		</div>
	</section>
);

Services.propTypes = {
	techStack: PropTypes.array.isRequired,
	services: PropTypes.array.isRequired
};

export default Services;