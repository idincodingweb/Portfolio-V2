import React from 'react';
import '../styles/Custom.css';

const Testimonials = () => {
  return (
    <section className="section" id="testmonial">
      <div className="container text-center">
        <p className="section-subtitle">What Think Client About Me ?</p>
        <h6 className="section-title mb-6">Testimonial</h6>

        <div className="row">
          <div className="col-md-6">
            <div className="testimonial-card">
              <div className="testimonial-card-img-holder">
                <img 
                  src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg" 
                  className="testimonial-card-img"
                  alt="Client 1"
                />
              </div>
              <div className="testimonial-card-body">
                <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                <h6 className="testimonial-card-title">Emily Reb</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial-card">
              <div className="testimonial-card-img-holder">
                <img 
                  src="https://images.pexels.com/photos/17459762/pexels-photo-17459762/free-photo-of-mode-fashion-fesyen-wanita.jpeg" 
                  className="testimonial-card-img"
                  alt="Client 2"
                />
              </div>
              <div className="testimonial-card-body">
                <p className="testimonial-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                <h6 className="testimonial-card-title">Emily Reb</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
