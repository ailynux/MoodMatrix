import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, CardMedia } from "@mui/material";
import axios from "axios";

const GIPHY_API_KEY = "YOUR_GIPHY_API_KEY";

function MoodGifs({ mood }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function fetchGifs() {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${mood}&limit=5`
      );
      setGifs(response.data.data);
    }
    fetchGifs();
  }, [mood]);

  return (
    <Box py={2}>
      <Typography variant="h5">GIFs:</Typography>
      <Grid container spacing={2}>
        {gifs.map((gif) => (
          <Grid item xs={6} md={4} key={gif.id}>
            <CardMedia
              component="img"
              image={gif.images.fixed_height.url}
              alt={gif.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MoodGifs;
