import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{setVideos(data.items); })
    .catch((err)=>{console.log(err)})
  },[searchTerm])
  
  
  return (
      <Box  sx={{overflowY: 'auto', height: '89vh', flex:2}}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{color: 'white'}}>
          Search results for: <span style={{ color: '#FC1503' }}>{searchTerm}</span> Videos
        </Typography>
        <Videos videos={videos}/>
      </Box>
  );
};

export default SearchFeed;