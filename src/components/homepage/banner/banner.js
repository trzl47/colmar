// import autobind from 'autobind-decorator'
import React from 'react'
import styleable from 'react-styleable'

import css from './banner.css'

const { object, string } = React.PropTypes

function Banner(props) {
	return(
		<section>
			<div class="banner row">
				<div class="left-column">
					<img id="imgBanner" src="..\src\images\banner.jpg" />
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

Banner.propTypes = {
  image: string.isRequired,
}

export default styleable(css)(Banner)
