import React from "react";
import Box from "@mui/material/Box";
import porshe from "./porshe.png";
import { Typography } from "@mui/material";

function AboutUs() {
  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "470px",
            height: "600px",
            mt: "5rem",
            color: "#000",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              Your premier destination for quality, convenience, and reliability
              in car rentals
            </Typography>
          </Box>
          <Box>
            <Typography>
              We are dedicated to providing an exceptional experience for every
              journey, whether you’re traveling for business, leisure, or an
              adventure.
            </Typography>
          </Box>
          <Box>
            <Typography>
              With a diverse fleet of well-maintained vehicles, from
              fuel-efficient compact cars to luxury models, Redex Rental has the
              perfect match for your needs and preferences. We take pride in our
              commitment to customer satisfaction, offering competitive pricing,
              flexible rental options, and a seamless booking process to make
              your rental experience as convenient as possible.
            </Typography>
          </Box>
          <Box>
            <Typography>
              Our knowledgeable and friendly team is always available to assist
              you with personalized recommendations and ensure that your rental
              process is smooth and hassle-free. At Redex Rental, we prioritize
              safety, comfort, and trust, ensuring that you can drive with
              confidence wherever your destination takes you.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "700px",
            height: "600px",
          }}
        >
          <img src={porshe} alt="aboutcar" height={400} width={700} />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
