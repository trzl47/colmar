// lib
import React from 'react';
// style
import css from '../../../static/css/banner.css';

function Banner(props) {
	return(
		<section>
			<div class="banner row">
				<div class="left-column">
					<img id="imgBanner" src={require('../../../static/img/banner.jpg')}/>
				</div>
				<div class="right-column">
					<div class="attention">
						<h1>Learn something<br />new everyday</h1>
						<h3>Lorem ipsum dolor sit amet,<br />consectetur adipsiscing elit.</h3>
						<button class="btn btn-default" id="start">Start here</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Banner;
