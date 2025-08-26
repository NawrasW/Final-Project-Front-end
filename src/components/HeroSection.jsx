import BusinessIcon from "../assets/Buisiness.svg";
import ScienceIcon from "../assets/Science.svg";
import DigitalIcon from "../assets/Digital.svg";
import FinanceIcon from "../assets/Finance.svg";
import PhysicsIcon from "../assets/Physics.svg";
import UIUXIcon from "../assets/UIUX.svg";
import IntroSection from "./IntroSection";
import FeatureCardsSection from "./FeatureCardsSection";

export default function HeroSection() {

    

  const popularTopics = [
    { name: "Business", courses: "1 Course", icon: BusinessIcon, color: "purple" },
    { name: "Data Science", courses: "1 Course", icon: ScienceIcon, color: "red" },
    { name: "Digital Program", courses: "2 Courses", icon: DigitalIcon, color: "orange" },
    { name: "Finance", courses: "2 Courses", icon: FinanceIcon, color: "orange" },
    { name: "Modern Physics", courses: "3 Courses", icon: PhysicsIcon, color: "yellow" },
    { name: "UI/UX Design", courses: "3 Courses", icon: UIUXIcon, color: "pink" },
  ]

  const navigationTabs = ["Product Type", "Business", "Data Science", "Digital Program", "Finance"]

  return (
    <>
          <section className="hero-section fade-in">
        <div className="hero-content">
          <h1 className="hero-title">
            Get smart <span className="highlight">opportunity for</span> your best future
          </h1>
          <p className="hero-subtitle">
            It is a long established fact that the reader will be distracted readable content of a page when
          </p>

          <div className="search-container">
            <div className="search-box">
              <input type="text" placeholder="Search Your Course Here" className="search-input" />
              <button className="search-button">Search <i class="bi bi-send"></i></button>
            </div>
          </div>

          <nav className="navigation-tabs">
            {navigationTabs.map((tab, index) => (
              <button key={index} className="nav-tab">
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <FeatureCardsSection/>

      <IntroSection
        introText="START LEARNING"
        headingText="Popular"
        highlightText="Topics To Learn"
        afterHighlight="From Today."
      />

      <section className="popular-topics-section fade-in">
          <div className="topics-grid">
            {popularTopics.map((topic, index) => (
              <div key={index} className={`topic-card ${topic.color}`}>
                <img src={topic.icon} className="topic-icon"/>
                <div className="topic-info">
                  <h4 className="topic-name">{topic.name}</h4>
                  <p className="topic-courses">{topic.courses}</p>
                </div>
              </div>
            ))}
          </div>
        
      </section>
      </>
  );
}
