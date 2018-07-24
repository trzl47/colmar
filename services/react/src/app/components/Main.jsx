// lib
import React from 'react';
// styles
import css from '../..//css/main.css';

function Main(props) {
	return(
		<section>
			<div class="main row">
				<div class="left-column">
					<div class="hero">
						<img src={require('../..//img/information-main.jpg')}/>
						<h1>It doesn't hurt to keep practicing</h1>
						<p>
							"Curabitur vitae libero in ipsum portitor consequat. Aliquam et commodo lectus,<br />nec consequat neque. Sed non accumsan urna. Phasellus sed consequat ex. Etiam<br />eget magna laoreet, efficitur dolor consequat, tristique ligula."
						</p>
						<br />
						<p><em>Emanuel, Sr Strategist at Hiring.com</em></p>
					</div>
				</div>
				<div class="right-column">
					<div class="horizontal-card" id="orientation-info">
						<img class="desktop" src={require('../..//img/information-orientation.jpg')}/>
						<img class="mobile" src={require('../..//img/information-orientation-mobile.jpg')}/>
						<div class="card-info">
							<h3>Orientation date</h3>
							<p>Tue 10/11 & Wed 10/12: 8am-3pm</p>
							<br />
							<a href="/">Read more</a>
							<br />
						</div>
					</div>
					<div class="horizontal-card" id="campus-info">
						<img class="desktop" src={require('../..//img/information-campus.jpg')}/>
						<img class="mobile" src={require('../..//img/information-campus-mobile.jpg')}/>
						<div class="card-info">
							<h3>Our campus</h3>
							<p>Find which campus is close by you</p>
							<br />
							<a href="/">Read more</a>
							<br />
						</div>
					</div>
					<div class="horizontal-card" id="guest-info">
						<img class="desktop" src={require('../..//img/information-guest-lecture.jpg')}/>
						<img class="mobile" src={require('../..//img/information-guest-lecture-mobile.jpg')}/>
						<div class="card-info">
							<h3>Our guest lecture</h3>
							<p>Join a keynote with Oliver Sack<br />about music in medical treatment</p>
							<br />
							<a href="/">Read more</a>
							<br />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Main;
