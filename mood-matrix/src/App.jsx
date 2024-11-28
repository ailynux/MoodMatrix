import React, { useState } from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MoodSelector from "./components/MoodSelector";
import MoodDashboard from "./components/MoodDashboard";
import { createTheme, ThemeProvider } from "@mui/material";
import { keyframes } from "@emotion/react";

// Create cyberpunk theme

const cyberpunkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ff9f"
    },
    secondary: {
      main: "#ff00ff"
    },
    text: {
      primary: "#ffffff", // White text for primary content
      secondary: "#e0e0e0" // Light grey for secondary content
    },
    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a"
    }
  },
  typography: {
    fontFamily: '"Orbitron", sans-serif',
    // Base typography settings for all text
    allVariants: {
      color: "#ffffff"
    },
    h2: {
      fontWeight: 700,
      background: "linear-gradient(45deg, #00ff9f 30%, #ff00ff 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
    h6: {
      fontFamily: '"Share Tech Mono", monospace',
      color: "#00ff9f"
    }
  }
});

// Glitch animation
const glitchAnimation = keyframes`
  0% { 
  transform: translate(0) scale(1) rotate(0deg);
  filter: hue-rotate(0deg) brightness(100%);
  text-shadow: 2px 2px #ff00ff, -2px -2px #00ff9f;
}
20% { 
  transform: translate(-8px, 8px) scale(1.1) rotate(-5deg);
  filter: hue-rotate(90deg) brightness(150%);
  text-shadow: -4px 0px #ff00ff, 4px 0px #00ff9f;
}
40% { 
  transform: translate(-12px, -12px) scale(0.9) rotate(5deg);
  filter: hue-rotate(180deg) brightness(200%);
  text-shadow: 0px -4px #ff00ff, 0px 4px #00ff9f;
}
60% { 
  transform: translate(12px, 12px) scale(1.2) skew(10deg);
  filter: hue-rotate(270deg) brightness(150%);
  text-shadow: 4px 4px #ff00ff, -4px -4px #00ff9f;
}
80% { 
  transform: translate(8px, -8px) scale(0.8) skew(-10deg);
  filter: hue-rotate(360deg) brightness(200%);
  text-shadow: -2px 2px #ff00ff, 2px -2px #00ff9f;
}
100% { 
  transform: translate(0) scale(1) rotate(0deg);
  filter: hue-rotate(0deg) brightness(100%);
  text-shadow: 2px 2px #ff00ff, -2px -2px #00ff9f;
}
`;

function App() {
  const [selectedMood, setSelectedMood] = useState("");

  return (
    <ThemeProvider theme={cyberpunkTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%)",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, #00ff9f, #ff00ff)"
          }
        }}
      >
        <Container maxWidth="md">
          <Box
            textAlign="center"
            py={4}
            sx={{
              "&:hover": {
                animation: `${glitchAnimation} 0.3s ease-in-out`
              }
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                textShadow:
                  "0 0 10px #00ff9f, 0 0 20px #00ff9f, 0 0 30px #00ff9f"
              }}
            >
              MoodMatrix
            </Typography>
            <Typography
              variant="h6"
              sx={{
                opacity: 0.8,
                fontFamily: '"Share Tech Mono", monospace'
              }}
            >
              [SELECT_MOOD.exe] Initializing mood parameters...
            </Typography>
          </Box>
          <MoodSelector setSelectedMood={setSelectedMood} />
          {selectedMood && <MoodDashboard mood={selectedMood} />}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
