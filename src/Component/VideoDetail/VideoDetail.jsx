import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "..//index";
import { fetchFromAPI } from "../../Utils/FetchFromAPI.js";
const VideoDetail = () => {
  const { id } = useParams();
  const [videodetail, setvideodetail] = useState("/");
  const [videos, setvideos] = useState(null);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setvideodetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setvideos(data.items)
    );
  }, [id]);

  if (!videodetail?.snippet) return "Loading...";

  const {
    snippet: { title },
    statistics: { viewCount, likeCount },
  } = videodetail;
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: "colimn", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: "#fff" }}
              py={1}
              px={2}></Stack>
            <Stack direction='row' gap='20px' alignItems='center'>
              <Typography
                variant='body1'
                sx={{ opacity: 0.7, color: "lightgray" }}>
                {parseInt(viewCount).toLocaleString()} Views
              </Typography>{" "}
              <Typography
                variant='body1'
                sx={{ opacity: 0.7, color: "lightgray" }}>
                {parseInt(likeCount).toLocaleString()} Likes
              </Typography>
            </Stack>
          </Box>
        </Box>
      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent='center'
        alignItems='center'>
        <Videos videos={videos} direction="column"/>
      </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
