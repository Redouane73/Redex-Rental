import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";
import "./NavBar.css";

function NavBar() {
  const linkStyle = {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    color: "white",
    gap: "0.5rem",
  };
  return (
    <>
      <header className="navigation">
        <div className="left-sec">
          <div className="logo">
            <img src={Logo} alt="logo" width={100} height={80} />
          </div>
          <div className="links">
            <Link to="/Redex-Rental" className="link">
              Home
            </Link>
            <Link to="/about" className="link">
              About Us
            </Link>
            <Link to="/carslist" className="link">
              Models
            </Link>
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </div>
        </div>
        <nav className="right-sec">
          {/* <Link to="/signup" className="link">
            Sign In
          </Link> */}
          <button href="#" className="button">
            <Link to="/carslist" style={linkStyle}>
              <span className="button__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg"
                  width="10"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg button__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Explore All
            </Link>
          </button>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
