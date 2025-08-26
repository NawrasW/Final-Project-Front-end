import React from 'react';
import { FaCheck, FaMapMarkerAlt, FaStar, FaFileAlt } from 'react-icons/fa';

const PricingNewsletterSection = () => {
  return (
    <section className="bg-light py-5 fade-in">
      <div className="container">
        <div className="row justify-content-center">
         
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 rounded-lg p-4 text-center">
              <h3 className="fw-bold">Free</h3>
              <h1 className="display-4 fw-bold my-3">$0</h1>
              <p className="text-muted">/Month</p>
              <a href="#" className="text-success text-decoration-none mb-4">
                Upgrade as you need
              </a>
              <ul className="list-unstyled text-start">
                <li className="d-flex align-items-center mb-2">
                  <FaCheck className="text-success me-2" style={{ color: '#2ECA7F' }} />
                  <span>Learn at your own pace</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaCheck className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaMapMarkerAlt className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaStar className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaFileAlt className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
              </ul>
              <button className="btn text-white btn-lg mt-auto" style={{ backgroundColor: '#2ECA7F' }}>Start Now</button>
            </div>
          </div>

    
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 rounded-lg p-4 text-center">
              <h3 className="fw-bold">Saver plan</h3>
              <h1 className="display-4 fw-bold my-3">$29</h1>
              <p className="text-muted">/Month</p>
              <a href="#" className="text-success text-decoration-none mb-4">
                <span className="text-muted text-decoration-line-through">$348</span> Per Year
              </a>
              <ul className="list-unstyled text-start">
                <li className="d-flex align-items-center mb-2">
                  <FaCheck className="text-success me-2"   style={{ color: '#2ECA7F' }} />
                  <span>Learn at your own pace</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaCheck className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaMapMarkerAlt className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaStar className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaFileAlt className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
              </ul>
              <button className="btn text-white btn-lg mt-auto" style={{ backgroundColor: '#2ECA7F' }}>Start Now</button>
            </div>
          </div>
          
         
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 rounded-lg p-4 text-center">
              <h3 className="fw-bold">Unlimited plan</h3>
              <h1 className="display-4 fw-bold my-3">$49</h1>
              <p className="text-muted">/Month</p>
              <a href="#" className="text-success text-decoration-none mb-4">
                <span className="text-muted text-decoration-line-through">$588</span> Per Year
              </a>
              <ul className="list-unstyled text-start">
                <li className="d-flex align-items-center mb-2">
                  <FaCheck className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaCheck className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaMapMarkerAlt className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaStar className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaFileAlt className="text-success me-2" />
                  <span>Learn at your own pace</span>
                </li>
              </ul>
              <button className="btn text-white btn-lg mt-auto" style={{ backgroundColor: '#2ECA7F' }}>Start Now</button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-md-8 text-center">
            <h2 className="display-6 fw-bold mb-3">Subscribbe to our newsletter, We don't make any spam.</h2>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim
            </p>
            <div className="search-box">
              <input 
                type="email" 
                className="search-input"
                placeholder="Enter Your Email Address" 
              />
          
             <button className="search-button"> <i class="bi bi-send"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingNewsletterSection;
