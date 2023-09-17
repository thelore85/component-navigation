import React from 'react';
import './Hero.css';

const Hero = () => {
  return(
    <section id="hero">
      <div className="wrapper">

        <div className="hero-content">
          <h1>Try this Menu Navigation</h1>
          <h2>Keep Calm and Navigate</h2>
          <button type="button" className="btn btn-primary">Designed for mobile</button>
          <button type="button" className="btn btn-secondary">hamburgher menu</button>
        </div>

      </div>
    </section>
  )
}

export default Hero;