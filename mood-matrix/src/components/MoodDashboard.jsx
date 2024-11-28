import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import MoodPlaylist from "./MoodPlaylist";

function MoodDashboard({ mood }) {
  const [quote, setQuote] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await axios.get("https://qapi.vercel.app/api/random");
        setQuote(response.data.quote);
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuote("Unable to fetch a quote. Please try again later.");
      }
    }
    fetchQuote();
  }, [mood]);

  const IMAGE_HEIGHT = 400;
  const IMAGE_WIDTH = 600;
  // Fetch random image
  useEffect(() => {
    async function fetchImage() {
      // Map moods to dog breeds
      const breedMap = {
        happy: "samoyed",
        sad: "corgi",
        energetic: "husky",
        chill: "pitbull"
      };

      try {
        const breed = breedMap[mood.toLowerCase()] || "random";
        const url =
          breed === "random"
            ? "https://dog.ceo/api/breeds/image/random"
            : `https://dog.ceo/api/breed/${breed}/images/random`;

        const response = await axios.get(url);
        setImage(response.data.message);
      } catch (error) {
        console.error("Error fetching image:", error);
        setImage("https://dog.ceo/api/breeds/image/random");
      }
    }
    fetchImage();
  }, [mood]);

  return (
    <Box py={4}>
      <Typography variant="h4" gutterBottom>
        Here's what we found for "{mood}"!
      </Typography>

      {/* Quote */}
      <Box py={2}>
        <Typography variant="h6">Quote:</Typography>
        {quote ? (
          <Typography variant="body1">{quote}</Typography>
        ) : (
          <CircularProgress />
        )}
      </Box>

      {/* Image */}
      <Box
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={2}
        overflow="hidden"
        border="1px solid #eee"
        borderRadius={2}
      >
        {image ? (
          <img
            src={image}
            alt={`${mood} mood dog`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        ) : (
          <CircularProgress />
        )}
      </Box>

      {/* Playlist */}
      <MoodPlaylist mood={mood} />
    </Box>
  );
}

export default MoodDashboard;
