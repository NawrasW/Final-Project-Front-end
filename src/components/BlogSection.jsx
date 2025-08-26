import React from 'react';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import IntroSection from './IntroSection';

const BlogSection = () => {
  return (
    <section 
      className="py-5 fade-in"
      style={{
        backgroundImage: 'url("https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/blog-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
        <IntroSection
        introText="News"
        headingText="Our Latest"
        highlightText="Blogs"
      
      />
      <div className="container py-5">
       
        
     
        
        <div className="row justify-content-center">
     
          <div className="col-lg-8">
            <div className="row">
          
              <div className="col-md-6 mb-4">
                <div className="card h-100 border-0 shadow-sm rounded-lg">
                  <img 
                    src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-thisisengineering-3862132-370x260.jpg" 
                    className="card-img-top rounded-top-lg" 
                    alt="Students working on a laptop" 
                  />
                  <div className="card-body">
                    <p className="card-text text-success fw-bold">Jun 01, 2024 | <span className='higlight'>Technology </span></p>
                    <h5 className="card-title fw-bold">
                      Professional Mobile Painting and Sculpting
                    </h5>
                    <hr />
                    <div className="d-flex justify-content-between text-muted small">
                    <button className="explore-button">READ MORE →</button>
                    </div>
                  </div>
                </div>
              </div>
              
            
              <div className="col-md-6 mb-4">
                <div className="card h-100 border-0 shadow-sm rounded-lg">
                  <img 
                    src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/pexels-thisisengineering-3861972-370x260.jpg" 
                    className="card-img-top rounded-top-lg" 
                    alt="Students in a computer lab" 
                  />
                  <div className="card-body">
                    <p className="card-text text-success fw-bold">May 29, 2024 | Programming</p>
                    <h5 className="card-title fw-bold">
                      The Complete Education Plan For A Brighter Future
                    </h5>
                    <hr />
                    <div className="d-flex justify-content-between text-muted small">
                    <button className="explore-button">READ MORE →</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4">
          
            <div className="card h-50 border-0 shadow-sm rounded-lg p-3 mb-4">
              <p className="card-text text-muted small">
                Jun 01, 2024 | <span className="fw-bold text-dark">Technology</span>
              </p>
              <h6 className="card-title fw-bold">
                Professional Mobile Painting and Sculpting
              </h6>
              <a href="#" className="text-success fw-bold text-decoration-none small mt-auto">
                  <button className="explore-button">READ MORE →</button>
              </a>
            </div>

           
            <div className="card h-40 border-0 shadow-sm rounded-lg p-3">
              <p className="card-text text-muted small">
                May 29, 2024 | <span className="fw-bold text-dark">Programming</span>
              </p>
              <h6 className="card-title fw-bold">
                Professional Ceramic Moulding for Beginner
              </h6>
              <a href="#" className="text-success fw-bold text-decoration-none small mt-auto">
                 <button className="explore-button">READ MORE →</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
