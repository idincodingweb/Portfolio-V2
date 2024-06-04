import React from 'react';
import '../styles/Custom.css';

const services = [
  {
    imgSrc: 'https://raw.githubusercontent.com/anonimuscoid/Assets1-IdinCoeg/e8b4d669cd77b4c6941b214d23015cd0246c99fa/aws.svg',
    title: 'AWS',
    subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.',
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/anonimuscoid/Assets1-IdinCoeg/main/cloudflare.svg',
    title: 'Cloudflare',
    subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.',
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/anonimuscoid/Assets1-IdinCoeg/main/database-solid.svg',
    title: 'Basis Data',
    subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.',
  },
  {
    imgSrc: 'https://raw.githubusercontent.com/anonimuscoid/Assets1-IdinCoeg/main/server-solid.svg',
    title: 'Server',
    subtitle: 'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.',
  },
];

const Service = () => {
  return (
    <section className="section" id="services">
      <div className="container text-center">
        <p className="section-subtitle">What I Do ?</p>
        <h6 className="section-title mb-6">Service</h6>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="service-card">
                <div className="body">
                  <img
                    src={service.imgSrc}
                    alt="Service icon"
                    className="icon"
                  />
                  <h6 className="title">{service.title}</h6>
                  <p className="subtitle">{service.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
