import { Box, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import Loader from "./Loader"
import { CheckCircle } from "@mui/icons-material"
import Videos from "./Videos"

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null)
  const [videos, setVideos] = useState(null);
  const {id} = useParams();
  
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then(data=> {console.log(data);setVideoDetails(data.items[0])});

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then(data=> setVideos(data.items))
  }, [id]);

  if (!videoDetails) return <Loader/>
  
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount }} = videoDetails 

  return (
    <Box minHeight='88vh'>
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className = 'react-player' controls
            />
            <Typography variant="h5" p={2} color='#fff' fontWeight='bold'>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between'
              sx={{color: '#fff'}} py={1} px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm: 'subtitle1', md: 'h6'}} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant="body1" sx={{opacity: 0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{opacity: 0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction='column'/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
