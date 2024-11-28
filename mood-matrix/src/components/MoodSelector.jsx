import React from "react";
import { Grid, Button, Box } from "@mui/material";

const moods = ["Happy", "Sad", "Energetic", "Chill"];

function MoodSelector({ setSelectedMood }) {
  return (
    <Box py={4}>
      <Grid container spacing={2} justifyContent="center">
        {moods.map((mood) => (
          <Grid item key={mood}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setSelectedMood(mood)}
            >
              {mood}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MoodSelector;
