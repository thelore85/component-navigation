import React from 'react';
import './MenuLink.css';

const MenuLink = ({ closeMobileMenu }) => {
  return(
    <>
      <a href="#service" onClick={closeMobileMenu} >Services</a>
      <a href="#tech" onClick={closeMobileMenu} >Tech</a>
      <a href="#about" onClick={closeMobileMenu} >About</a>
      <a href="#project" onClick={closeMobileMenu} >Projects</a>
    </>
  )
}


export default MenuLink;