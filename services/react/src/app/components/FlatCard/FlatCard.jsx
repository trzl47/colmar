// lib
import React from 'react';
// style
import '../../../css/flatcard.css';

const FlatCard = (props) => {
	return (
			<figure className='flatcard'>
				<img className='fc-image desktop' src={require('../../../img/'+props.mobile)} />
				<img className='fc-image mobile'
				src={require('../../../img/'+(props.desktop === '' ? props.mobile : props.desktop))} />
				<figcaption className='fc-info'>
					<h3> { props.header } </h3>
					<p> { props.detail } </p>
					<a href='/'>Read more</a>
				</figcaption>
			</figure>
	);
};

export default FlatCard;