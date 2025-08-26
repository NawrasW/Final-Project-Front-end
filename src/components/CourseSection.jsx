import React, { useMemo } from "react";

const CourseSection = () => {
  //useMemo
  const coursesData = useMemo(() => [
    {
      title: "Financial Security Thinking and Principles Theory",
      category: "Business",
      lessons: 10,
      duration: "2 hours",
      rating: "4.5",
      level: "Beginner",
      price: 99,
      isFree: false,
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-karolina-grabowska-5882683.jpg",
    },
    {
      title: "Professional Ceramic Moulding for Beginners",
      category: "Finance",
      lessons: 15,
      duration: "3 hours",
      rating: "4.7",
      level: "Intermediate",
      price: 149,
      isFree: false,
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-olia-danilevich-4974912-420x280.jpg",
    },
    {
      title: "Basic Fundamentals of Interior & Graphics Design",
      category: "UI/UX Design",
      lessons: 8,
      duration: "1.5 hours",
      rating: "4.8",
      level: "Beginner",
      price: 0,
      isFree: true,
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-tiia-pakk-4350767.jpg",
    },
    {
      title: "WordPress for Beginners – Master WordPress",
      category: "Digital Program",
      lessons: 12,
      duration: "2.5 hours",
      rating: "4.6",
      level: "Intermediate",
      price: 199,
      isFree: false,
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-pixabay-265667.jpg",
    },
    {
      title: "The Complete Python Course for Beginner 2023",
      category: "Data Science",
      lessons: 9,
      duration: "2 hours",
      rating: "4.4",
      level: "Beginner",
      price: 0,
      isFree: true,
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-christina-morillo-1181359.jpg",
    },
    {
      title: "Ultimate Photoshop Training: From Beginner",
      category: "UI/UX Design",
      lessons: 11,
      duration: "2 hours",
      rating: "4.9",
      level: "Intermediate",
      price: 129,
      isFree: false,
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-caio-56759.jpg",
    },
  ], []);

  return (
    <section className="courses-section fade-in">
      <div className="courses-container">
        <div className="courses-grid">
          {coursesData.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-image-container d-flex gap-4">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="course-image"
                />
                <div className="d-flex flex-column">
                  <div className="course-category">{course.category}</div>
                  <h3 className="course-title">{course.title}</h3>
                  <div
                    className={`course-price ${course.isFree ? "free" : "paid"}`}
                  >
                    {course.isFree ? "Free" : `$${course.price}`}
                  </div>
                </div>
              </div>

              <div className="course-content">
                <div className="course-stats">
                  <div className="course-stat">
                    <span className="stat-icon">📚</span>
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div className="course-stat">
                    <span className="stat-icon">⏱️</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="course-stat">
                    <span className="stat-icon">⭐</span>
                    <span>{course.rating}</span>
                  </div>
                  <div className="course-stat">
                    <span className="stat-icon">📊</span>
                    <span>{course.level}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <button className="contact-btn mt-5 fw-bold">View All Courses</button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
