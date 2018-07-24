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
		<React.Fragment>
			<Header />
			<Banner />
			<Main />
			<Courses />
			<Thesis />
			<Footer />
		</React.Fragment>
	);
};

export default HomePage;
