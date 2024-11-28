import { Box, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";

const neonPulse = keyframes`
  0% { box-shadow: 0 0 5px #00ff9f, 0 0 10px #00ff9f, 0 0 20px #00ff9f; }
  50% { box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff; }
  100% { box-shadow: 0 0 5px #00ff9f, 0 0 10px #00ff9f, 0 0 20px #00ff9f; }
`;

const CyberButton = styled(Button)({
  width: "200px",
  margin: "10px 0",
  padding: "15px 25px",
  background: "rgba(10,10,10,0.8)",
  border: "2px solid #00ff9f",
  color: "#fff",
  fontFamily: '"Share Tech Mono", monospace',
  textTransform: "uppercase",
  letterSpacing: "2px",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(120deg, transparent, rgba(0,255,159,0.4), transparent)",
    transition: "0.5s"
  },

  "&:hover": {
    background: "rgba(0,255,159,0.1)",
    transform: "scale(1.05)",
    animation: `${neonPulse} 2s infinite`,

    "&::before": {
      left: "100%"
    }
  }
});

// MoodSelector.jsx
const MoodSelector = ({ setSelectedMood }) => {
  const moods = ["Happy", "Sad", "Energetic", "Calm", "Angry", "Chill"];

  return (
    <Box
      sx={{
        position: "fixed", // Change to fixed
        top: 0, // Remove top margin
        left: 0,
        width: "200px", // Set fixed width
        height: "100vh", // Full height
        padding: "20px",
        background: "rgba(0,0,0,0.7)",
        borderRight: "2px solid #00ff9f",
        backdropFilter: "blur(5px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 1000, // Ensure it's above other content
        "&::before": {
          content: '""',
          position: "absolute",
          right: "-2px",
          top: "0",
          width: "2px",
          height: "100%",
          background: "#00ff9f",
          boxShadow: "0 0 15px #00ff9f"
        }
      }}
    >
      <Grid container direction="column" spacing={2}>
        {moods.map((mood) => (
          <Grid item key={mood}>
            <CyberButton onClick={() => setSelectedMood(mood)}>
              {mood}
            </CyberButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoodSelector;
