import React from "react";

const IntroSection = ({ introText, headingText, highlightText, afterHighlight }) => {
  return (
    <div className="intro-section fade-in">
      <p className="topic-intro">{introText}</p>
      <h2 className="topics-heading">
        {headingText} <span className="highlight">{highlightText}</span>
        {afterHighlight && <> {afterHighlight}</>}
      </h2>
    </div>
  );
};

export default IntroSection;
