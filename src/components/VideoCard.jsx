/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { kind, videoId },
    snippet: {
      channelId,
      channelTitle,
      description,
      liveBroadcastContent,
      publishTime,
      publishAt,
      thumbnails,
      title,
    },
  },
}) => {
  return (
    <Card>
      <Link>
        <CardMedia image={thumbnails?.high?.url} alt={title} sx={{width: 358, height: 180}}/>
      </Link>
    </Card>
  );
};

export default VideoCard;
