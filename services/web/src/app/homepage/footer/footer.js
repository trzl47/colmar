// lib
import React from 'react';
// style
import css from '../../../static/css/footer.css';

function Footer(props) {
	return(
		<footer>
			<div class="footer row">
				<p class="copyright">&copy; 2016 Colmar Academy. All rights reserved</p>
				<a class="terms" href="/">
					<span>Terms</span>
				</a>
				<a class="privacy" href="/">
					<span>Privacy</span>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
