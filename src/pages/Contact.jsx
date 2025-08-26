import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageHeader from "../components/RouterSection";
import ScrollToTopButton from "../components/ScrollToTopButton ";

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" />
      <section className="container py-5">
        {/* Contact Cards Section */}
        <div className="row g-4 justify-content-center text-center mb-5">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
            <div
              className="rounded-circle d-flex justify-content-center align-items-center mb-3"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(46, 202, 128, 0.1)",
                color: "#2ECA80",
                fontSize: "1.5rem",
              }}
            >
              <i className="bi bi-geo-alt"></i>
            </div>
            <h5 className="fw-bold" style={{ color: "#1B2E63" }}>
              Our Location
            </h5>
            <p className="text-secondary mb-0">
              3481 Melrose Place, Beverly Hills
            </p>
            <p className="text-secondary">CA-90210</p>
          </div>

          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
            <div
              className="rounded-circle d-flex justify-content-center align-items-center mb-3"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(46, 202, 128, 0.1)",
                color: "#2ECA80",
                fontSize: "1.5rem",
              }}
            >
              <i className="bi bi-telephone"></i>
            </div>
            <h5 className="fw-bold" style={{ color: "#1B2E63" }}>
              Telephone
            </h5>
            <p className="text-secondary mb-0">(+1) 517 397 7100</p>
            <p className="text-secondary">(+1) 411 315 8138</p>
          </div>

          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center">
            <div
              className="rounded-circle d-flex justify-content-center align-items-center mb-3"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(46, 202, 128, 0.1)",
                color: "#2ECA80",
                fontSize: "1.5rem",
              }}
            >
              <i className="bi bi-envelope"></i>
            </div>
            <h5 className="fw-bold" style={{ color: "#1B2E63" }}>
              Send Email
            </h5>
            <p className="text-secondary mb-0">info@example.com</p>
            <p className="text-secondary">admin@example.com</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="text-center mb-4">
          <h2
            className="fw-bold "
            style={{ color: "#1B2E63", fontSize: "50px" }}
          >
            Send your message.
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form className="bg-light p-5 rounded-3 shadow-sm">
              <div className="row g-4">
                <div className="col-md-6">
                  <label
                    htmlFor="name"
                    className="form-label fw-bold  "
                    style={{ color: "#1B2E63" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-3 border-0 border-dark py-3"
                    style={{ backgroundColor: "#F4F4F4 " }}
                    id="name"
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="email"
                    className="form-label fw-bold  "
                    style={{ color: "#1B2E63" }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-3 border-0 py-3 "
                    style={{ backgroundColor: "#F4F4F4 " }}
                    id="email"
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="subject"
                    className="form-label fw-bold  "
                    style={{ color: "#1B2E63" }}
                  >
                    Your Subject
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-3 border-0 py-3"
                    style={{ backgroundColor: "#F4F4F4 " }}
                    id="subject"
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="message"
                    className="form-label fw-bold "
                    style={{ color: "#1B2E63" }}
                  >
                    Your Message
                  </label>
                  <textarea
                    className="form-control rounded-3 border-0 py-3 "
                    style={{ backgroundColor: "#F4F4F4 " }}
                    id="message"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="btn text-white rounded-pill px-5 py-3"
                  style={{ backgroundColor: "#2ECA80" }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </>
  );
}
