// lib
import React from 'react';
// components
import VertCard from './VertCard/VertCard.jsx';
import vertcards from './VertCard/vertcards.js';
// styles
import '../../css/courses.css';

const Courses = () => {
	const coursecards = vertcards.map((card) => {
		return (
			<VertCard key={vertcards.indexOf(card)}
			img={card.img}
			header={card.header}
			detail={card.detail} />
		);
	});

	return(
		<section className='courses'>
			<header className='courses-header'>
				<h1>Start learning</h1>
			</header>
			<section className='coursecards'>
				{ coursecards }
			</section>
		</section>
	);
};

export default Courses;