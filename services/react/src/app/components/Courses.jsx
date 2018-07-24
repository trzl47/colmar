// lib
import React from 'react';
// styles
import css from '../..//css/courses.css';

function Courses(props) {
	return(
		<section>
			<div class="courses">
				<div class="section-header row">
					<h1>Start learning</h1>
				</div>
				<div class="deck row">
					<div class="hand row">
						<div class="vertical-card" id="software">
							<img src={require('../..//img/course-software.jpg')} />
							<div class="card-info">
								<h3>Software engineering</h3>
								<p>COURSES</p>
								<p>Web Development, Mobile<br />Development, iOT, APIs</p>
							</div>
						</div>
						<div class="vertical-card" id="computer">
							<img src={require('../..//img/course-computer-art.jpg')} />
							<div class="card-info">
								<h3>Computer art</h3>
								<p>COURSES</p>
								<p>Imaging & Design, Web Design, Motion Graphics & Visual Effects, Computer Animation</p>
							</div>
						</div>
						<div class="vertical-card" id="design">
							<img src={require('../..//img/course-design.jpg')} />
							<div class="card-info">
								<h3>Design</h3>
								<p>COURSES</p>
								<p>User Experience Design, User<br />Research, Visual Design</p>
							</div>
						</div>
					</div>
					<div class="hand row">
						<div class="vertical-card" id="data">
							<img src={require('../..//img/course-data.jpg')} />
							<div class="card-info">
								<h3>Data</h3>
								<p>COURSES</p>
								<p>Data Science, Big Data, SQL, Data<br />Visualization</p>
							</div>
						</div>
						<div class="vertical-card" id="business">
							<img src={require('../..//img/course-business.jpg')} />
							<div class="card-info">
								<h3>Business</h3>
								<p>COURSES</p>
								<p>Product Development, Business<br />Development, Startup</p>
							</div>
						</div>
						<div class="vertical-card" id="marketing">
							<img src={require('../..//img/course-marketing.jpg')} />
							<div class="card-info">
								<h3>Marketing</h3>
								<p>COURSES</p>
								<p>Analytics, Content Marketing,<br />Mobile Marketing</p>
							</div>
						</div>
					</div>
					<div class="course mobile">
						<h3>Software engineering</h3>
					</div>
					<div class="course mobile">
						<h3>Computer art</h3>
					</div>
					<div class="course mobile">
						<h3>Design</h3>
					</div>
					<div class="course mobile">
						<h3>Data</h3>
					</div>
					<div class="course mobile">
						<h3>Business</h3>
					</div>
					<div class="course mobile">
						<h3>Marketing</h3>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Courses;
