import React from "react";

function Footer() {
  return (
    <footer className="footer text-light py-5 ">
      <div className="container">
        <div className="row gy-4">
        
          <div className="col-12 col-md-4 text-center text-md-start">
            <img
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/logo3.png"
              alt="logo"
              className="mb-3"
              style={{ maxWidth: "150px" }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
              risus nec dui venenatis dignissim.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start align-items-center flex-wrap">
              <span className="fw-bold me-2">CONNECT WITH:</span>
              <a href="#" className="text-light me-2 fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light me-2 fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-2 fs-5"><i className="bi bi-youtube"></i></a>
              <a href="#" className="text-light me-2 fs-5"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-pinterest"></i></a>
            </div>
          </div>

          
          <div className="col-6 col-md-2 text-center text-md-start">
            <h6 className="fw-bold mb-3">Courses</h6>
            <ul className="list-unstyled">
              <li>Creative Writing</li>
              <li>Digital Marketing</li>
              <li>SEO Business</li>
              <li>Social Marketing</li>
              <li>Graphic Design</li>
              <li>Website Development</li>
            </ul>
          </div>

          
          <div className="col-6 col-md-2 text-center text-md-start">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Knowledge Base</li>
              <li>Affiliate Program</li>
              <li>Community</li>
              <li>Market API</li>
              <li>Support Team</li>
            </ul>
          </div>

          
          <div className="col-12 col-md-4 text-center text-md-start">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-success me-2">&#9742;</span>
                Phone: <span className="text-light">+88 457 845 695</span>
              </li>
              <li className="mb-2">
                <span className="text-success me-2">&#9993;</span>
                Email: <span className="text-light">example@yourmail.com</span>
              </li>
              <li className="mb-2">
                <span className="text-success me-2">&#128205;</span>
                Location: <span className="text-light">California, USA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="border-top border-light py-3 mt-4">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <span className="small mb-2 mb-md-0">&copy; 2025 Edusion. All Rights Reserved</span>
          <div>
            <a href="#" className="text-light text-decoration-none small me-3">Terms & Conditions</a>
            <a href="#" className="text-light text-decoration-none small me-3">Special</a>
            <a href="#" className="text-light text-decoration-none small">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
