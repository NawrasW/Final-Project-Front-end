import AboutSection from "../components/AboutSection";

import CourseSection from "../components/CourseSection";
import Achievement from "../components/Achievement";
import PricingNewsletterSection from "../components/PricingNewsletterSection";
import BlogSection from "../components/BlogSection";
import IntroSection from "../components/IntroSection";
import HeroSection from "../components/HeroSection";
import ScrollToTopButton from "../components/ScrollToTopButton ";

const HomePage = () => {
  return (
    <main className="homepage">
      <HeroSection />

      <AboutSection />
      <IntroSection
        introText="Popular Courses"
        headingText="Choose Our"
        highlightText="Top Courses"
      />
      <CourseSection />
      <Achievement />
      <PricingNewsletterSection />
      <BlogSection />
      <ScrollToTopButton />
    </main>
  );
};

export default HomePage;
