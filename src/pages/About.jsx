import React from "react";
import PageHeader from "../components/RouterSection";
import FeatureCardsSection from "../components/FeatureCardsSection";
import AboutSection from "../components/AboutSection";
import IntroSection from "../components/IntroSection";
import BestFeatureSection from "../components/BestFeaturesSection";
import GreatAchiemvmentSection from "../components/GreatAchiemvmentSection";
import ExpertsSection from "../components/ExpertsSection";
import FAQSection from "../components/FAQSection";
import ScrollToTopButton from "../components/ScrollToTopButton ";

const About = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <FeatureCardsSection />
      <AboutSection/>
      <IntroSection
        introText="Why Choose Edusion"
        headingText="Find the "
        highlightText="Best Features"
        afterHighlight="Of Edusion"
      />
      <BestFeatureSection/>
      <GreatAchiemvmentSection/>
      <ExpertsSection/>
      <FAQSection/>

      <div className="container trusted-company-box mt-5">
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
      <ScrollToTopButton />
    </>
  );
};

export default About;
