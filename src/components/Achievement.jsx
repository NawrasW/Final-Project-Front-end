import React from "react";

import IntroSection from "./IntroSection";
import GreatAchiemvmentSection from "./GreatAchiemvmentSection";
import { FaCheck} from 'react-icons/fa';


const Achievement = () => {
  return (
    <>
  
     <GreatAchiemvmentSection/>


      <section className="video-section fade-in">
 
        <div className="video-overlay d-flex justify-content-center align-items-center">
          <a href="#" className="play-button">
            <i className="bi bi-play-circle-fill"></i>
          </a>
        </div>
      </section>
      <div className="container trusted-company-box">
        <h4 className="trusted-text text-center">
          Trusted Company Around The World!
        </h4>
      </div>

      <div className="container logo-container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <img
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/4.png"
              alt="Company Logo"
              className="logo-img mx-2 my-2"
            />
            <img
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/3.png"
              alt="Company Logo"
              className="logo-img mx-2 my-2"
            />
            <img
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/2.png"
              alt="Company Logo"
              className="logo-img mx-2 my-2"
            />
            <img
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/1.png"
              alt="Company Logo"
              className="logo-img mx-2 my-2"
            />
            <img
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/3.png"
              alt="Company Logo"
              className="logo-img mx-2 my-2"
            />
          </div>
        </div>
      </div>

      <section
        className="bg-white py-12 fade-in"
        style={{
          backgroundImage: `url('https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/section-bg-2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
         
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <p className="text-muted mb-2">Best Online Learning Platform</p>
              <h2
                className="display-4 font-weight-bold mb-4"
                style={{ color: "#192D62" }}
              >
                One Platform & Many <br />
                <span
                  className="text-success"
                  style={{ borderBottom: "4px solid #1ca14b" }}
                >
                  Courses For You
                </span>
              </h2>
              <p className="text-muted mb-4">
                From blogs to emails to ad copies, auto-generate catchy,
                original, and high-converting copies in popular tones languages.
              </p>

              <div className="d-flex flex-column mb-4">
                <div className="d-flex align-items-center mb-2">
                  <FaCheck className="text-success me-2" />
                  <p className="mb-0">9/10 Average Satisfaction Rate</p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FaCheck className="text-success me-2" />
                  <p className="mb-0">96% Completiation Rate</p>
                </div>
                <div className="d-flex align-items-center">
                  <FaCheck className="text-success me-2" />
                  <p className="mb-0">Friendly Environment & Expert Teacher</p>
                </div>
              </div>

              <button className="btn btn-outline-success rounded-pill px-4 py-2">
                EXPLORE OUR COURSES &rarr;
              </button>
            </div>

          
            <div className="col-lg-6 col-md-12 position-relative">
              <img
                src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/about5.png"
                alt="Woman in a yellow shirt smiling"
                className="img-fluid rounded-lg shadow-sm"
              />
              {/* "Winning Awards" floating box */}
              <div
                className="position-absolute p-3 bg-white rounded-lg shadow-sm"
                style={{ top: "10%", left: "10%" }}
              >
                <div className="d-flex align-items-center">
                  {/* Placeholder for award icon */}
                  <span className="me-2" role="img" aria-label="award">
                    🥇
                  </span>
                  <div>
                    <p className="mb-0 fw-bold">We Have</p>
                    <p className="mb-0">50+ Winning Awards</p>
                  </div>
                </div>
              </div>

              {/* "Trained Teachers" floating card */}
              <div
                className="position-absolute p-3 bg-white rounded-lg shadow-sm"
                style={{ bottom: "10%", right: "10%" }}
              >
                <p className="mb-2 fw-bold">Trained Teachers</p>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Teacher 1"
                    className="rounded-circle me-2"
                  />
                  <p className="mb-0">Teacher 1</p>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Teacher 2"
                    className="rounded-circle me-2"
                  />
                  <p className="mb-0">Teacher 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievement;
