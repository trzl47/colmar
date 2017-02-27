// import autobind from 'autobind-decorator'
import React from 'react'
import styleable from 'react-styleable'

import css from './header.css'

const { object, string } = React.PropTypes

function MenuItem(props) {
	return(
		<a className="campus" href="">
			<img src={props.image} />
			<span>{props.title}</span>
		</a>
	);
}

MenuItem.propTypes = {
  image: string.isRequired,
	title: string,
}

function Header(props) {
	return(
		<header>
			<nav>
				<div className="header row">
					<div className="logo">
						<a className="brand" href="">
							<img id="logo" src="..\src\images\ic-logo.svg" />
							<span id="colmar">COLMAR</span>
							<span id="academy">ACADEMY</span>
						</a>
					</div>
					<div className="menu">
						<a className="campus" href="">
							<img src="..\src\images\ic-on-campus.svg" />
							<span>On campus</span>
						</a>
						<a className="online" href="">
							<img src="..\src\images\ic-online.svg" />
							<span>Online</span>
						</a>
						<a className="login" href="">
							<img src="..\src\images\ic-login.svg" />
							<span>Sign in</span>
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
}

Header.propTypes = {
  image: string.isRequired,
}

export default styleable(css)(Header)
