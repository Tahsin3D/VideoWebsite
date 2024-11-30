/* eslint-disable react/prop-types */

import { Box, Stack, Typography } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos ? videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      )): 
      <Typography variant="h4" fontWeight='bold' mb={2} sx={{color: 'white'}}>
      No Videos Found!
    </Typography>
      }
    </Stack>
  );
};

export default Videos;
