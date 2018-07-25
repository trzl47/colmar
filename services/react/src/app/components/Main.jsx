// lib
import React from 'react';
// components
import FlatCard from './FlatCard/FlatCard.jsx';
import { maincards } from './FlatCard/flatcards.js';
// styles
import '../../css/main.css';

const Main = () => {
	const flatcards = maincards.map((card) => {
		return (
			<FlatCard key={maincards.indexOf(card)}
			desktop={card.desktop}
			mobile={card.mobile}
			header={card.header}
			detail={card.detail} />
		);
	});
	return (
		<section className='main'>
			<figure className='main-fig'>
				<img src={require('../../img/information-main.jpg')}/>
				<figcaption className='caption'>
					<h1>It doesn't hurt to keep practicing</h1>
					<p>
						'Curabitur vitae libero in ipsum portitor consequat. Aliquam et commodo lectus, nec consequat neque. Sed non accumsan urna. Phasellus sed consequat ex. Etiam eget magna laoreet, efficitur dolor consequat, tristique ligula.'
					</p>
					<p><em> - Emanuel, Sr Strategist at Hiring.com</em></p>
				</figcaption>
			</figure>
			<section className='maincards'>
				{ flatcards }
			</section>
		</section>
	);
};

export default Main;