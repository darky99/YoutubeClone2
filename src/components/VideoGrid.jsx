import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";

export default function VideosGrid({ videos, direction }) {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.personalization_id && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
}
