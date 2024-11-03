import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <header className="navigation">
        <div className="logo-container">
          <div className="logo">
            <img src={Logo} alt="logo" width={100} height={80} />
          </div>
        </div>
        <nav className="nav-links">
          <div className="links">
            <Link to="/Redex-Rental" className="link">
              Home
            </Link>
            <Link to="/about" className="link">
              About Us
            </Link>
            <Link to="/carslist" className="link">
              Rentals
            </Link>
            <Link to="/categories" className="link">
              Categories
            </Link>
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
