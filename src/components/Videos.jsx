/* eslint-disable react/prop-types */

import { Box, Stack } from "@mui/material";

const Videos = ({ videos }) => {
  console.log(videos[0].snippet.title);
  return (
    <Stack>
      <Box>
        {videos.map((item) => (
          <div key={item.id.videoId}>{item.snippet.title}</div>
        ))}
      </Box>
    </Stack>
  );
};

export default Videos;
