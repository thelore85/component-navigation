import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'; // sidebar menu
import MenuLink from '../MenuLink/MenuLink.js';
import Logo from '../Logo/Logo.js';
import './Navigation.css';


const Navigation = () => {

  const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  return(
    <>
    <div className="navigation 	d-none d-sm-block">
      <MenuLink closeMobileMenu = { handleClose } />
    </div>

    <div className="mobile-nagvigation d-block d-sm-none">
      <i className="fa-solid fa-bars" onClick={handleShow} ></i>
    </div>

    {/* hidden menu - offcanvas*/}
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Logo />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
    
        <div className="canvas-navigation">
          <MenuLink closeMobileMenu = { handleClose }/>
        </div>

        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default Navigation;