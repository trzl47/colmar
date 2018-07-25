// lib
import React from 'react';
// styles
import '../../css/header.css';

const Header = () => {
	return(
		<header className='header'>
			<nav className='navbar'>
				<section className="logo">
					<a className="brand" href="/">
						<img id="logo" src={require('../../img/ic-logo.svg')} />
						<span id="colmar">COLMAR</span>
						<span id="academy">ACADEMY</span>
					</a>
				</section>
				<section className="menu">
					<a className="campus" href="/">
						<img src={require('../../img/ic-on-campus.svg')} />
						<span>On campus</span>
					</a>
					<a className="online" href="/">
						<img src={require('../../img/ic-online.svg')} />
						<span>Online</span>
					</a>
					<a className="login" href="/">
						<img src={require('../../img/ic-login.svg')} />
						<span>Sign in</span>
					</a>
				</section>
			</nav>
		</header>
	);
};

export default Header;
