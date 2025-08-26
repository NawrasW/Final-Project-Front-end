import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link } from 'react-router-dom';
export default function CustomNavbar() {
  return (
    <header>
      
      <div className="topbar d-flex justify-content-between align-items-center px-3 fixed-top">
        <span className="fw-bold d-flex align-items-center text-white">
          <img 
            src="src/assets/EnvatoLogoLight.svg"
            alt="Envato" 
            className="envato-logo me-1"
          />
          <span className="market mb-2">market</span>
        </span>
        <button className="buy-btn">Buy now</button>
      </div>

      <div className="contact-bar d-flex justify-content-between align-items-center px-7 ">
        <div className="d-flex align-items-center gap-5 flex-wrap">
          <span><i className="bi bi-telephone-fill"></i> +(354) 6800 37849</span>
          <span><i className="bi bi-envelope-fill"></i> hello@edusion.com</span>
          <span><i className="bi bi-clock-fill"></i> Mon to sat Open: 9am - 6pm</span>
        </div>
        <div className="d-flex gap-3 social-icons">
          <i className="bi bi-twitter"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-youtube"></i>
          <i className="bi bi-pinterest"></i>
        </div>
      </div>

      {/* Main Navbar */}
       <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 fixed-top ">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="src\assets\Edusion.png"
            alt="logo"
            className="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home with Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Home</Link></li>
                <li><Link className="dropdown-item" to="/about">About</Link></li>
                <li><Link className="dropdown-item" to="/courses">Courses</Link></li>
                <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">Pages </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="/courses">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="#">Blog </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/contact">Contact</a>
            </li>
          </ul>
          <div className="d-flex gap-3">
            <button className="contact-btn">Contact</button>
            <button className="account-btn">Account</button>
          </div>
        </div>
      </div>
    </nav>
    </header>
  )
}
