import React, { useState } from 'react';
import '../styles/Custom.css';

const portfolios = [
  {
    imgSrc: 'https://plus.unsplash.com/premium_photo-1675024775153-5720ec149542?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Hardware',
    category: 'Hardware',
    link: '#'
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Hardware',
    category: 'Hardware',
    link: '#'
  },
  
  
  {
    imgSrc: 'https://images.pexels.com/photos/89955/pexels-photo-89955.jpeg',
    title: 'App Development',
    category: 'Mobile Apps',
    link: '#'
  },
  {
    imgSrc: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
    title: 'App Development',
    category: 'Mobile Apps',
    link: '#'
  },
  
  {
    imgSrc: 'https://images.pexels.com/photos/1601773/pexels-photo-1601773.jpeg',
    title: 'Graphic Design',
    category: 'Graphics',
    link: '#'
  },
  {
    imgSrc: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    title: 'Graphic Design',
    category: 'Graphics',
    link: '#'
  },
  
  {
    imgSrc: 'https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg',
    title: 'Server',
    category: 'Server',
    link: '#'
  },
  {
    imgSrc: 'https://images.pexels.com/photos/17323801/pexels-photo-17323801/free-photo-of-cahaya-gelap-industri-internet.jpeg',
    title: 'Server',
    category: 'Server',
    link: '#'
  },
  // Tambahkan lainnya jika di masa mendatang dibtuhkan kategori baru
];

const categories = ['All', 'Hardware', 'Mobile Apps', 'Graphics', 'Server'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPortfolios = selectedCategory === 'All' 
    ? portfolios 
    : portfolios.filter(portfolio => portfolio.category === selectedCategory);

  return (
    <section className="section" id="portfolio">
      <div className="container text-center">
        <p className="section-subtitle">What I Did ?</p>
        <h6 className="section-title mb-6">Portfolio</h6>

        <div className="categories">
          {categories.map(category => (
            <button
              key={category}
              className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row">
          {filteredPortfolios.map((portfolio, index) => (
            <div className="col-md-4" key={index}>
              <a href={portfolio.link} className="portfolio-card">
                <img 
                  src={portfolio.imgSrc} 
                  className="portfolio-card-img"
                  alt={portfolio.title}
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>{portfolio.title}</h4>
                    <p className="font-weight-normal">Category: {portfolio.category}</p>
                  </span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
