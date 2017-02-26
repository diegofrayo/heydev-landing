import React, {
	PropTypes
} from 'react';

const ServiceInfo = ({
	service: {
		icon,
		title,
		text
	}
}) => (
	<article style={{ display: 'flex', margin: '15px', flexDirection: 'column', padding: '8px' }}>
		<div style={{ display: 'flex' }}>
			<i style={{ fontWeight: '700', color: '#2ecc71' }} className={icon} aria-hidden="true">{''}</i>
		</div>
		<div style={{ display: 'flex', fontFamily: 'sans-serif', color: '#222' }}>
			<h2>{title}</h2>
		</div>
		<div style={{ display: 'flex', flex: 1, fontSize: '16px', color: 'rgba( 0, 0, 0, 0.5 )', lineHeight: '23px', fontFamily: 'sans-serif' }}>
			<p>
				{text}
			</p>
		</div>
	</article>
);

ServiceInfo.propTypes = {
	service: PropTypes.shape({
		icon: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}).isRequired
};

export default ServiceInfo;