// lib
import React from 'react';
// style
import '../../css/banner.css';

const Banner = () => {
	return (
		<figure className='banner'>
			<img className='banner-image' alt='students at table' src={require('../../img/banner.jpg')} />
			<figcaption className='attention'>
				<h1>Learn something new everyday</h1>
				<h3>Lorem ipsum dolor sit amet, consectetur adipsiscing elit.</h3>
				<button className='btn'>Start here</button>
			</figcaption>
		</figure>
	);
};

export default Banner;