import React, { Component } from 'react';
import Menu from './components/Menu/Menu.js';
import Hero from './components/Hero/Hero.js';
import Footer from './components/Footer/Footer.js';

// css
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';



////////////////////////////////
/////////TO DO
//////////////////////////////

// PORTFOLIO SECTION
// ABOUT SECTION

class App extends Component{

	render(){
		return(
			<div className='app-container'>
				<Menu />
				<Hero />
				<Footer />
			</div>
		)
	}
}

export default App