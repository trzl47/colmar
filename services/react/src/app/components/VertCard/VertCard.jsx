// lib
import React from 'react';
// style
import '../../../css/vertcard.css';

const VertCard = (props) => {
	return (
		<figure className='vertcard'>
			<img className='vc-img' alt='' src={require('../../../img/'+props.img)} />
			<figcaption className='vc-info'>
				<h3> { props.header } </h3>
				<p className='desktop'> COURSES -<br /> { props.detail } </p>
			</figcaption>
		</figure>
	);
};

export default VertCard;