import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const linkStyle = {
    textDecoration: "none",
    display: "flex",
    gap: "0.5rem",
  };

  return (
    <div className="landing-page">
      <main className="home">
        <section className="hero">
          <div className="heading">
            <h1>Drive Your Dream</h1>
          </div>
          <div className="description">
            <p>
              Welcome To Redex Rental
              <span>Where You Rent Vehicule Easily</span>
            </p>
            <div className="discover">
              <p>Discover Your Perfect Rental</p>
            </div>
          </div>
          <div className="Btn">
            <button>
              <Link to="/carslist" style={linkStyle}>
                <p>Explore</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
