import React from 'react';
import '../styles/Custom.css';

const About = () => {
  return (
    <section className="section pt-0" id="about">
      <div className="container text-center">
        <div className="about">
          <div className="about-img-holder">
            <img 
              src="https://raw.githubusercontent.com/idincodingweb/landingpagekece.com/master/img/idinganteng.png" 
              className="about-img" 
              alt="Idin Iskandar"
            />
          </div>
          <div className="about-caption">
            <p className="section-subtitle">Who Am I ?</p>
            <h2 className="section-title mb-3">About Me</h2>
            <p>
              culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum
              expedita aliquid! Debitis, nam!
            </p>
            <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
