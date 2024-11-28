import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import axios from "axios";
import Grid from "@mui/material/Grid";

// Animations
const glitch = keyframes`
  0% { 
    transform: translate(0) scale(1) rotate(0deg);
    filter: hue-rotate(0deg);
  }
  20% { 
    transform: translate(-2px, 2px) scale(1.1) rotate(-2deg);
    filter: hue-rotate(90deg);
  }
  40% { 
    transform: translate(-2px, -2px) scale(0.9);
    filter: hue-rotate(180deg);
  }
  60% { 
    transform: translate(2px, 2px) scale(1.1);
    filter: hue-rotate(270deg);
  }
  80% { 
    transform: translate(2px, -2px) scale(0.9);
    filter: hue-rotate(360deg);
  }
  100% { 
    transform: translate(0) scale(1);
    filter: hue-rotate(0deg);
  }
`;

// Styled Components
const CyberContainer = styled(Box)({
  background: "#0a0a0a",
  padding: "2rem",
  minHeight: "100vh"
});

const CyberPanel = styled(Box)({
  background: "rgba(26,26,26,0.9)",
  borderRadius: "8px",
  border: "1px solid #00ff9f",
  padding: "20px",
  boxShadow: "0 0 20px rgba(0,255,159,0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 0 30px rgba(0,255,159,0.4)"
  }
});

const GlitchText = styled(Typography)({
  fontFamily: '"Share Tech Mono", monospace',
  color: "#fff",
  textShadow: "2px 2px #ff00ff, -2px -2px #00ff9f",
  animation: `${glitch} 2s infinite`
});

const CyberImage = styled(Box)({
  width: "100%",
  height: "400px",
  borderRadius: "8px",
  overflow: "hidden",
  border: "2px solid #00ff9f",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(45deg, rgba(0,255,159,0.1), rgba(255,0,255,0.1))"
  },
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
});

const MoodDashboard = ({ mood }) => {
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await axios.get("https://qapi.vercel.app/api/random");
        setQuote(response.data.quote);
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuote("Unable to fetch quote. Please try again.");
      }
    }
    fetchQuote();
  }, [mood]);

  useEffect(() => {
    async function fetchImage() {
      const breedMap = {
        happy: "samoyed",
        sad: "basset",
        energetic: "husky",
        calm: "goldenretriever",
        angry: "boxer",
        chill: "chow"
      };

      try {
        const breed = breedMap[mood.toLowerCase()] || "dog";
        const response = await axios.get(
          `https://dog.ceo/api/breed/${breed}/images/random`
        );
        setImage(response.data.message);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    }
    fetchImage();
  }, [mood]);

  return (
    <CyberContainer>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <GlitchText variant="h2" align="center">
            Mood: {mood}
          </GlitchText>
        </Grid>

        <Grid item xs={12} md={6}>
          <CyberPanel>
            <CyberImage>
              <img src={image} alt={mood} />
            </CyberImage>
          </CyberPanel>
        </Grid>

        <Grid item xs={12} md={6}>
          <CyberPanel>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Share Tech Mono", monospace',
                color: "#fff",
                textShadow: "0 0 10px #00ff9f",
                marginBottom: 2
              }}
            >
              Daily Quote
            </Typography>
            <Typography
              sx={{
                color: "#e0e0e0",
                fontFamily: '"Share Tech Mono", monospace',
                lineHeight: 1.6
              }}
            >
              {quote}
            </Typography>
          </CyberPanel>
        </Grid>
      </Grid>
    </CyberContainer>
  );
};

export default MoodDashboard;
