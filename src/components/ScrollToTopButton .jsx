import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`btn  position-fixed`}
      style={{
        bottom: "40px",
        right: "40px",
        backgroundColor:"#2ECA7F",
        color:"#ffff",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: visible ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}
