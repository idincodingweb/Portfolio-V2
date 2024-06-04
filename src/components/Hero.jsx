import React from 'react';
import '../styles/Custom.css'; // Assuming you have a CSS file for styling

const Hero = () => {
  return (
    <header id="home" className="header">
      <div className="overlay"></div>
      <div className="header-content container">
        <h1 className="header-title">
          <span className="up">HI!</span>
          <span className="down">I am Idin Code</span>
        </h1>
        <p className="header-subtitle">FRONTEND WEB DEVELOPMENT</p>
        <button className="btn btn-primary">Visit My Works</button>
      </div>
    </header>
  );
};

export default Hero;
