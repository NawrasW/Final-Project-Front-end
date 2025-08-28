import React from "react";
import PageHeader from "../components/RouterSection";
import CourseSection from "../components/CourseSection";
import ScrollToTopButton from "../components/ScrollToTopButton ";

const Courses = () => {
  return (
    <>
      <PageHeader title="Courses" />

      <div className="d-flex justify-content-end pt-5 pe-5 pe-md-5 pe-lg-90">
        <div className="d-flex flex-column w-auto">
          <select
            id="sort"
            name="sort"
            className="form-select bg-white w-auto"
            defaultValue="newest"
          >
            <option value="newest">Release Date (newest first)</option>
            <option value="oldest">Release Date (oldest first)</option>
            <option value="a-z">Course Title (A–Z)</option>
            <option value="z-a">Course Title (Z–A)</option>
          </select>
        </div>
      </div>

      <CourseSection />
      <ScrollToTopButton />
    </>
  );
};

export default Courses;
