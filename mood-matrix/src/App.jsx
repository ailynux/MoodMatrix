import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import MoodSelector from "./components/MoodSelector";
import MoodDashboard from "./components/MoodDashboard";

function App() {
  const [selectedMood, setSelectedMood] = useState("");

  return (
    <Container maxWidth="md">
      <Box textAlign="center" py={4}>
        <Typography variant="h2" gutterBottom>
          MoodMatrix
        </Typography>
        <Typography variant="h6">
          Pick your mood and let us recommend something fun!
        </Typography>
      </Box>
      <MoodSelector setSelectedMood={setSelectedMood} />
      {selectedMood && <MoodDashboard mood={selectedMood} />}
    </Container>
  );
}

export default App;
