import React from 'react'
import { Stack , Box } from "@mui/material";

import {  VideoCard } from "../index";

const Videos = ({ videos ,direction}) => {
  if (!videos?.length) return "Loading..."
    return (
      <Stack
        direction={direction || "row"}
        flexWrap='wrap'
        justifyContent='center'
        gap={2}>
        {videos.map((item, index) => (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
          </Box>
        ))}
      </Stack>
    );
};

export default Videos