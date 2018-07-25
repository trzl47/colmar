// lib
import React from 'react';
// components
import FlatCard from './FlatCard/FlatCard.jsx';
import { thesiscards } from './FlatCard/flatcards.js';
// styles
import '../../css/thesis.css';

const Thesis = () => {
	const flatcards = thesiscards.map((card) => {
		return (
			<FlatCard key={thesiscards.indexOf(card)}
			desktop={card.desktop}
			mobile={card.mobile}
			header={card.header}
			detail={card.detail} />
		);
	});

	return(
		<section className='thesis'>
			<header className='thesis-header'>
				<h1>Thesis exhibit</h1>
			</header>
			<figure className='thesis-fig'>
				<video className='thesis-vid' autoPlay={true} muted={true} loop={true}>
					<source src={require('../../img/thesis.mp4')} type='video/mp4' />
				</video>
				<figcaption className='vid-caption'>
					<h2>Reimagine urban</h2>
					<p>
						'Curabitur vitae libero in ipsum portitor consequat. Aliquam et commodo lectus, nec consequat neque. Sed non accumsan urna. Phasellus sed consequat ex. Etiam eget magna laoreet, efficitur dolor consequat, tristique ligula.'
					</p>
				</figcaption>
			</figure>
			<section className='thesiscards'>
				{ flatcards }
			</section>
		</section>
	);
};

export default Thesis;