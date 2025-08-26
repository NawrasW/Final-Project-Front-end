import React from 'react';
import IntroSection from './IntroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function ExpertsSection() {
  const experts = [
    {
      name: "Daniel Miller",
      title: "Logo Expert",
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/team2.jpg",
      courses: 3,
      students: 3,
    },
    {
      name: "Masum Billah",
      title: "Developer",
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/team1.jpg",
      courses: 6,
      students: 5,
    },
    {
      name: "Kenneth Renteria",
      title: "Marketer",
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-vladimir-kudin-10141145.jpg",
      courses: 0,
      students: 0,
    },
    {
      name: "Richard Hood",
      title: "UI UX Designer",
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-boris-hamer-16645409.jpg",
      courses: 2,
      students: 0,
    },
  ];

  return (
    <>
      <IntroSection
        introText="Team Member"
        headingText="Our Expert"
        highlightText="Instructors"
      />

      <section className="container py-5 fade-in">
        <div className="row g-4 justify-content-center">
          {experts.map((expert, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12 d-flex">
              <div className="card w-100 rounded-3 shadow-sm border-0 overflow-hidden">
                <div className="position-relative">
                  <img src={expert.image} className="card-img-top img-fluid" alt={expert.name} />
                  <div
                    className="position-absolute d-flex flex-column justify-content-center align-items-center"
                    style={{
                      top: '0px',
                      right: '20px',
                      height: '150px',
                      width: '40px',
                      backgroundColor: '#2ECA80',
                      borderBottomRightRadius: '50px',
                      borderBottomLeftRadius: '50px',
                    }}
                  >
                    <a href="#" className="d-block text-white mb-2"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="d-block text-white mb-2"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="d-block text-white"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="card-body text-center p-3">
                  <h5 className="card-title fw-bold mb-0" style={{ color: '#1B2E63' }}>{expert.name}</h5>
                  <p className="card-text text-secondary mb-3">{expert.title}</p>
                  <div className="d-flex justify-content-center gap-3 text-secondary">
                    <span>
                      <i className="bi bi-journal-text me-1" style={{ color: '#2ECA80' }}></i>
                      {expert.courses} Courses
                    </span>
                    <span>
                      <i className="bi bi-person me-1" style={{ color: '#2ECA80' }}></i>
                      {expert.students} Students
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
