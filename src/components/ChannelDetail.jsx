import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from './Videos'

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then(data=> setVideos(data?.items));
  }, [id])


  return (
    <Box minHeight='87vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(255,0,139,1) 68%)',
          zIndex: 10,
          height: '300px'
        }}/>
        <ChannelCard channelDetail={ChannelDetail} marginTop = '-110px'/>
      </Box>

      <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
