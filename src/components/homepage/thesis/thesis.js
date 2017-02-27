// import autobind from 'autobind-decorator'
import React from 'react'
import styleable from 'react-styleable'

import css from './thesis.css'

const { object, string } = React.PropTypes

function Thesis(props) {
	return(
		<section>
			<div class="thesis">
				<div class="section-header row">
					<h1>Thesis exhibit</h1>
				</div>
				<div class="exhibit row">
					<div class="left-column">
						<div class="video">
							<video autoplay="" muted="" loop="">
				        <source src="..\src\videos\thesis.mp4" type="video/mp4" />
				      </video>
							<h2>Reimagine urban</h2>
							<p>
								"Curabitur vitae libero in ipsum portitor consequat. Aliquam et commodo lectus, nec consequat neque. Sed non accumsan urna. Phasellus sed consequat ex. Etiam eget magna laoreet, efficitur dolor consequat, tristique ligula."
							</p>
						</div>
					</div>
					<div class="right-column">
						<div class="horizontal-card" id="fisma">
							<img class="desktop" src="..\src\images\thesis-fisma.jpg" />
							<div class="card-info">
								<h3>Fisma: Design and</h3>
								<p>-</p>
								<br />
								<br />
								<p>Designer showcase of new prototype product</p>
							</div>
						</div>
						<div class="horizontal-card" id="nowthen">
							<img class="desktop" src="..\src\images\thesis-now-and-then.jpg" />
							<div class="card-info">
								<h3>Now and then</h3>
								<br />
								<p>Research study about New York</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

Thesis.propTypes = {
  image: string.isRequired,
}

export default styleable(css)(Thesis)
