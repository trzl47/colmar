// lib
import React from 'react';
// style
import '../../css/footer.css';

function Footer(props) {
	return(
		<footer className='footer'>
			<p className='copyright'>&copy; 2016 Colmar Academy. All rights reserved</p>
			<a className='terms' href='/'>Terms</a>
			<a className='privacy' href='/'>Privacy</a>
		</footer>
	);
}

export default Footer;
