import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import candles from "./back.jpg";
import AboutUs from "./AboutUs";
import CarsList from "./CarsList";

function Home() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${candles})`,
          height: "100vh",
          width: "100vw",
          backgroundPosition: "center",
          backgroundSize: "cover",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "5.25rem",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Optional overlay color
            backdropFilter: "blur(2px)", // Adjust blur intensity
          },
        }}
      >
        <Box
          sx={{
            // position: "relative",
            // zIndex: 1,
            pt: "10rem",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Typography
              variant="h1"
              sx={{ fontSize: "5rem", fontWeight: "bolder", color: "#AD2323" }}
            >
              Drive Your Dream
            </Typography>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Typography sx={{ fontSize: "2rem", color: "white" }}>
              Welcome To Redex Rental
            </Typography>
            <Typography sx={{ fontSize: "2rem", color: "white" }}>
              Where You Rent Vehicule Easily
            </Typography>
            {/* <Box>
              <Typography
                sx={{
                  fontSize: "2rem",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Discover Your Perfect Rental
              </Typography>
            </Box> */}
          </Box>
          <Box>
            {/* From Uiverse.io by cssbuttons-io  */}
            <button className="learn-more">
              <Link to="/about">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </Link>
            </button>
          </Box>
        </Box>
      </Box>
      <AboutUs />
      <CarsList />
    </Box>
  );
}

export default Home;
