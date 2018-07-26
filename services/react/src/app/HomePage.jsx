// libs
import React from 'react';
// components
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import Main from './components/Main.jsx';
import Courses from './components/Courses.jsx';
import Thesis from './components/Thesis.jsx';
import Footer from './components/Footer.jsx';
// styles
import '../css/homepage.css';

const HomePage = () => {
	return (
		<section className='homepage'>
			<Header />
			<Banner />
			<Main />
			<Courses />
			<Thesis />
			<Footer />
		</section>
	);
};

export default HomePage;