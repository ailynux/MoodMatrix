import React from "react";
import { Box, Typography, Switch, FormControlLabel, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";

const glitch = keyframes`
  0% { transform: translate(0) scale(1); filter: hue-rotate(0deg); }
  20% { transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
  40% { transform: translate(-2px, -2px); filter: hue-rotate(180deg); }
  60% { transform: translate(2px, 2px); filter: hue-rotate(270deg); }
  80% { transform: translate(2px, -2px); filter: hue-rotate(360deg); }
  100% { transform: translate(0) scale(1); filter: hue-rotate(0deg); }
`;

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

const CyberSwitch = styled(Switch)({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#00ff9f",
    "&:hover": {
      backgroundColor: "rgba(0,255,159,0.1)"
    }
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#00ff9f"
  }
});

const Settings = () => {
  return (
    <Box sx={{ p: 4, marginLeft: "200px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <GlitchText variant="h2" align="center">
            Settings
          </GlitchText>
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
              Appearance
            </Typography>
            <FormControlLabel
              control={<CyberSwitch />}
              label="Enable Animations"
              sx={{ color: "#e0e0e0" }}
            />
            <FormControlLabel
              control={<CyberSwitch />}
              label="Dark Mode"
              sx={{ color: "#e0e0e0" }}
            />
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
              Notifications
            </Typography>
            <FormControlLabel
              control={<CyberSwitch />}
              label="Enable Notifications"
              sx={{ color: "#e0e0e0" }}
            />
            <FormControlLabel
              control={<CyberSwitch />}
              label="Sound Effects"
              sx={{ color: "#e0e0e0" }}
            />
          </CyberPanel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
