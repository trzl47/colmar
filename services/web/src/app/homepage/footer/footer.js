// import autobind from 'autobind-decorator'
import React from 'react';

import css from '../../../static/css/footer.css';

// const { object, string } = React.PropTypes;

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

// Footer.propTypes = {
//   image: string.isRequired,
// };

export default Footer;
