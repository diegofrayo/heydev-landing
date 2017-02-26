import React from 'react';
import Footer from './Footer.jsx';

const Contact = () => (
	<section style={{ height: '100vh', display: 'flex', flex: 1, flexDirection: 'column' }} >
		<div style={{ display: 'flex', flex: 2, backgroundColor: '#BDBDBD' }} >
			Contact
		</div>
		<div style={{ display: 'flex', flex: 1, backgroundColor: '#9E9E9E' }} >
			<Footer />
		</div>
	</section>
);

export default Contact;