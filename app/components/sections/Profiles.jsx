import React, {
	PropTypes
} from 'react';

import Card from 'components/utils/Card.jsx';
import PersonInfo from 'components/utils/PersonInfo.jsx';

const Profiles = ({
	profiles
}) => (
	<section style={{ height: '100vh', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
		<div style={{ display: 'flex', flexDirection: 'column', width: '60%', margin: '0 auto', paddingTop: '15px' }}>
			<div style={{ flexDirection: 'row', display: 'flex' }}>
				<h1>Welcome</h1>
			</div>
		</div>
		<Card>
			<div style={{ display: 'flex', flex: 1 }}>
				{profiles.map((p, key) => <PersonInfo person={p} key={key} />)}
			</div>
		</Card>
	</section>
);

Profiles.propTypes = {
	profiles: PropTypes.array.isRequired
};

export default Profiles;