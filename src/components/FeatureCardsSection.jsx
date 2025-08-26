import React from "react";

const featureCards = [
  {
    title: "Quality Education",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore",
  },
  {
    title: "Experienced Teachers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore",
  },
  {
    title: "Delicious Food",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore",
  },
];
const FeatureCardsSection = () => {
  return (
    <section className="features-section fade-in">
      <div className="features-container">
        {featureCards.map((card, index) => (
          <div key={index} className="feature-card">
            <h3 className="feature-title">{card.title}</h3>
            <p className="feature-description">{card.description}</p>
            <button className="explore-button">EXPLORE COURSES →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCardsSection;
