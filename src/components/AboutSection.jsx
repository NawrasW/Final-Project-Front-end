import React from 'react'

const AboutSection = () => {
  return (
    <section className="about-section fade-in">
        <div className="about-container">
          <div className="about-image-container">
            <div className="about-image-bg"></div>
            <img
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/free-course-768x813.png"
              alt="Professional woman in orange shirt"
              className="about-image"
            />
          </div>
          <div className="about-content">
            <h2 className="about-title">
              Learn New Skills To Go <span className="about-highlight">Ahead For Your</span> Career.
            </h2>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur notted adipiscing elit sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. From blogs to emails to ad copies, auto-generate catchy, original, and
              high-converting copies in popular tones languages From blogs to emails to ad copies, auto-generate catchy,
              original and high-converting copies.
            </p>
            <p className="about-text">
              Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails
              to ad copies auto-generate catchy
            </p>
          <button className="contact-btn">Explore More</button>
          </div>
        </div>
      </section>


  )
}

export default AboutSection