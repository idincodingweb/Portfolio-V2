import React from 'react';
import '../styles/Custom.css';

const pricingPlans = [
  {
    icon: 'https://e-course-com.vercel.app/assets/img/trick-treat1-img.png',
    title: 'Free',
    price: '0.00/Month',
    features: [
      'accusamus reprehenderit',
      'provident dolorem',
      'quos neque',
      'fugiat quibusdam',
      '',
      ''
    ],
    link: '#',
  },
  {
    icon: 'https://e-course-com.vercel.app/assets/img/trick-treat3-img.png',
    title: 'Basic',
    price: '9.99/Month',
    features: [
      'accusamus reprehenderit',
      'provident dolorem',
      'quos neque',
      'fugiat quibusdam',
      ''
    ],
    link: '#',
  },
  {
    icon: 'https://e-course-com.vercel.app/assets/img/trick-treat4-img.png',
    title: 'Premium',
    price: '99.9/Month',
    features: [
      'accusamus reprehenderit',
      'provident dolorem',
      'quos neque',
      'fugiat quibusdam',
    ],
    link: '#',
  },
];

const Pricing = () => {
  return (
    <section className="section" id="pricing">
      <div className="container text-center">
        <p className="section-subtitle">How Much I Charge ?</p>
        <h6 className="section-title mb-6">My Pricing</h6>
        <div className="pricing-wrapper">
          {pricingPlans.map((plan, index) => (
            <div className="pricing-card" key={index}>
              <div className="pricing-card-header">
                <img 
                  className="pricing-card-icon" 
                  src={plan.icon} 
                  alt={plan.title}
                />
              </div>
              <div className="pricing-card-body">
                <h6 className="pricing-card-title">{plan.title}</h6>
                <div className="pricing-card-list">
                  {plan.features.map((feature, i) => (
                    <p key={i}>{feature ? feature : <i className="ti-close"></i>}</p>
                  ))}
                </div>
              </div>
              <div className="pricing-card-footer">
                <span>$</span>
                <span>{plan.price}</span>
              </div>
              <a href={plan.link} className="btn btn-primary mt-3 pricing-card-btn">Subscribe</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
