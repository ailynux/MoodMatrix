import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import axios from "axios";

const TMDB_API_KEY = "YOUR_TMDB_API_KEY";

function MoodMovies({ mood }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_keywords=${mood}`
      );
      setMovies(response.data.results);
    }
    fetchMovies();
  }, [mood]);

  return (
    <Box py={2}>
      <Typography variant="h5">Movies:</Typography>
      <Grid container spacing={2}>
        {movies.slice(0, 5).map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Card>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <CardContent>
                <Typography variant="subtitle1">{movie.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MoodMovies;
