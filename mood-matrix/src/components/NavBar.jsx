import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";

// Animations
const glowPulse = keyframes`
  0% { text-shadow: 0 0 10px #00ff9f, 0 0 20px #00ff9f; }
  50% { text-shadow: 0 0 20px #ff00ff, 0 0 40px #ff00ff; }
  100% { text-shadow: 0 0 10px #00ff9f, 0 0 20px #00ff9f; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

// Styled Components
const CyberAppBar = styled(AppBar)({
  background: "rgba(10,10,10,0.9)",
  backdropFilter: "blur(10px)",
  borderBottom: "2px solid #00ff9f",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "rgba(0,255,159,0.5)",
    animation: `${scanline} 4s linear infinite`
  }
});

const NavLink = styled(Typography)({
  color: "#fff",
  margin: "0 20px",
  padding: "5px 15px",
  cursor: "pointer",
  position: "relative",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontFamily: '"Share Tech Mono", monospace',
  transition: "all 0.3s ease",
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0%",
    height: "2px",
    background: "#00ff9f",
    transition: "width 0.3s ease"
  },
  "&:hover": {
    color: "#00ff9f",
    animation: `${glowPulse} 2s infinite`,
    "&::before": {
      width: "100%"
    }
  }
});

const Logo = styled(Typography)({
  fontFamily: '"Orbitron", sans-serif',
  fontSize: "1.5rem",
  fontWeight: 700,
  background: "linear-gradient(45deg, #00ff9f 30%, #ff00ff 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: `${glowPulse} 3s infinite`
});

const NavBar = () => {
  return (
    <CyberAppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Logo>MOOD MATRIX</Logo>
        <Box sx={{ display: "flex" }}>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="./profile">Profile</NavLink>
          <NavLink to="./analytics">Analytics</NavLink>
          <NavLink to="./settings">Settings</NavLink>
        </Box>
      </Toolbar>
    </CyberAppBar>
  );
};

export default NavBar;
