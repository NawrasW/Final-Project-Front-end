import React from 'react'
import IntroSection from './IntroSection'
import {
  FaSmile,
  FaFileAlt,
  FaTrophy,
  FaUserCheck,
  FaCheck,
} from "react-icons/fa";

const achievementsData = [
  {
    icon: <FaSmile />,
    number: "854",
    text: "Enrolled Students",
    color: "#3498db", // Blue
  },
  {
    icon: <FaFileAlt />,
    number: "521",
    text: "Academic Programs",
    color: "#e67e22", // Orange
  },
  {
    icon: <FaTrophy />,
    number: "163",
    text: "Winning Award",
    color: "#2ecc71", // Green
  },
  {
    icon: <FaUserCheck />,
    number: "93",
    text: "Certified Students",
    color: "#9b59b6", // Purple
  },
];

const GreatAchiemvmentSection = () => {
  return (<>
      <IntroSection
        introText="Some Fun Fact"
        headingText="Our Great "
        highlightText="Achievement"
        />

      <section className="achievements-section py-5 fade-in">
        <div className="container">
          <div className="row justify-content-center">
            {achievementsData.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 my-3">
                <div className="achievement-card shadow-sm p-4 text-center">
                  <div
                    className="achievement-icon mb-3"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="achievement-number"
                    style={{ color: item.color }}
                    >
                    {item.number}
                  </h3>
                  <p className="achievement-text text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            </>
  )
}

export default GreatAchiemvmentSection