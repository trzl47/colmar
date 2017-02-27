// import autobind from 'autobind-decorator'
import React from 'react'
import styleable from 'react-styleable'

import Header from './header/header.js'
import Banner from './banner/banner.js'
import Main from './main/main.js'
import Courses from './courses/courses.js'
import Thesis from './thesis/thesis.js'
import Footer from './footer/footer.js'

import css from './homepage.css'

function Home() {
	return (
		<div>
			<Header />
			<Banner />
			<Main />
			<Courses />
			<Thesis />
			<Footer />
		</div>
	)
}

export default styleable(css)(Home)
