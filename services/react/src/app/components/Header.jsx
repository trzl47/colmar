// lib
import React from 'react';
// styles
import '../../css/header.css';

const Header = () => {
	return(
		<header className='header'>
			<nav className='navbar'>
				<a className="nav-item brand" href="/">
					<img id="logo" src={require('../../img/ic-logo.svg')} />
					<span className="colmar">COLMAR</span>
					<span className="academy">ACADEMY</span>
				</a>
				<a className="nav-item pull-right campus" href="/">
					<img src={require('../../img/ic-on-campus.svg')} />
					<span>On campus</span>
				</a>
				<a className="nav-item pull-right online" href="/">
					<img src={require('../../img/ic-online.svg')} />
					<span>Online</span>
				</a>
				<a className="nav-item pull-right login" href="/">
					<img src={require('../../img/ic-login.svg')} />
					<span>Sign in</span>
				</a>
			</nav>
		</header>
	);
};

export default Header;
