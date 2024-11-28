import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import MoodSelector from "./components/MoodSelector";
import MoodDashboard from "./components/MoodDashboard";

// First, import Google Fonts in index.html
// Add to <head>:

// App.jsx
import { createTheme, ThemeProvider } from "@mui/material";
import { keyframes } from "@emotion/react";

// Create cyberpunk theme
const cyberpunkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ff9f" // Neon green
    },
    secondary: {
      main: "#ff00ff" // Neon pink
    },
    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a"
    }
  },
  typography: {
    fontFamily: '"Orbitron", sans-serif',
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
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
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
