import React from 'react';
import Logo from './Logo/Logo.js';
import Navigation from './Navigation/Navigation.js'

import './Menu.css';


const Menu = () => {
  return(
    <section id="menu">
      <nav className="wrapper vertical-align">  

        <Logo />
        <Navigation />
        
      </nav>
    </section>
  )
}

export default Menu;

