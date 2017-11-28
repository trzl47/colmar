// lib
import React from 'react';
// styles
import css from '../../../static/css/header.css';

function MenuItem(props) {
	return(
		<a className="campus" href="/">
			<img src={props.image} />
			<span>{props.title}</span>
		</a>
	);
}

function Header(props) {
	return(
		<header>
			<nav>
				<div className="header row">
					<div className="logo">
						<a className="brand" href="/">
							<img id="logo" src={require('../../../static/img/ic-logo.svg')}/>
							<span id="colmar">COLMAR</span>
							<span id="academy">ACADEMY</span>
						</a>
					</div>
					<div className="menu">
						<a className="campus" href="/">
							<img src={require('../../../static/img/ic-on-campus.svg')}/>
							<span>On campus</span>
						</a>
						<a className="online" href="/">
							<img src={require('../../../static/img/ic-online.svg')}/>
							<span>Online</span>
						</a>
						<a className="login" href="/">
							<img src={require('../../../static/img/ic-login.svg')}/>
							<span>Sign in</span>
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
