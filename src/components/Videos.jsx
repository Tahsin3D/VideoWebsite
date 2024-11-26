/* eslint-disable react/prop-types */

import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  return (
    <Stack>
      <Box>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard/>}
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default Videos;
