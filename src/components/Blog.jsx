import React from 'react';
import '../styles/Custom.css';

const Blog = () => {
  return (
    <section className="section" id="blog">
      <div className="container text-center">
        <p className="section-subtitle">Recent Posts?</p>
        <h6 className="section-title mb-6">Blog</h6>
        
        <div className="blog-card">
          <div className="blog-card-header">
            <img 
              src="https://images.pexels.com/photos/2582932/pexels-photo-2582932.jpeg" 
              className="blog-card-img" 
              alt="Idin Iskandar"
            />
          </div>
          <div className="blog-card-body">
            <h5 className="blog-card-title">Consectetur adipisicing elit</h5>
            <p className="blog-card-caption">
              <a href="Belumadacuy">By: Idin Code</a>
              <a href="Belumadacuy"><i className="ti-heart text-danger"></i> 234</a>
              <a href="Belumadacuy"><i className="ti-comment"></i> 123</a>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae,delectus eum commodi soluta distinctio sit repudiandae possimus sunt.
            </p>
            <a href="Belumadacuy" className="blog-card-link">Read more <i className="ti-angle-double-right"></i></a>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-card-header">
            <img 
              src="https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg" 
              className="blog-card-img" 
              alt="Idin Iskandar"
            />
          </div>
          <div className="blog-card-body">
            <h5 className="blog-card-title">Explicabo illo</h5>
            <p className="blog-card-caption">
              <a href="Belumadacuy">By: Admin</a>
              <a href="Belumadacuy"><i className="ti-heart text-danger"></i> 456</a>
              <a href="Belumadacuy"><i className="ti-comment"></i> 264</a>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae,delectus eum commodi soluta distinctio sit repudiandae possimus sunt.
            </p>
            <a href="Belumadacuy" className="blog-card-link">Read more <i className="ti-angle-double-right"></i></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;
