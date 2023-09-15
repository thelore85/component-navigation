import React from 'react';
import Logo from './Logo/Logo.js';
import DarkMode from './DarkMode/DarkMode.js';

import './Menu.css';


const Menu = () => {
  return(
    <section id="menu">
      <nav className="wrapper">  

        <Logo />
        <DarkMode />
        
      </nav>
    </section>
  )
}

export default Menu;

