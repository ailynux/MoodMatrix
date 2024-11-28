import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { playlists } from "../data";

function MoodPlaylist({ mood }) {
  return (
    <Box py={2}>
      <Typography variant="h6">Playlist:</Typography>
      <List>
        {playlists[mood].map((song, index) => (
          <ListItem key={index}>
            <ListItemText primary={song} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default MoodPlaylist;
