import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";

import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const VedioDetails = () => {

   const { id } = useParams();

   const [video, setvideo] = useState([]);
   const [relatedvideo, setRelatedvideo] = useState([])

   console.log(video,relatedvideo,'helllllllllllllllllo');

   const { snippet, statistics } = video;

   useEffect(() => {

      fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
         setvideo(data.items[0])
      );
      fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&maxResults=50`)
        .then(data=>setRelatedvideo(data.items))

      
   }, [id]);

   return (
      <Box minHeight="95vh">
         <Stack direction={{ xs: "column", md: "row" }} >
            <Box flex={1}>
               <Box sx={{ width: "100%", position: {xs:'static',md:'sticky'} , top: "86px" }}>
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${id}`}
                        controls
                        className="react-player"
                      />               

                  <Typography variant="h5" color="#fff" fontWeight="bold" p={2}>
                      {snippet?.title}
                  </Typography>

                  <Stack
                      direction="row"
                      justifyContent="space-between"
                      color="#fff"
                      py={1}
                      px={2}
                  >
                      <Link to={`/channel/${snippet?.channelId}`} >
                        <Typography variant = 'subtitle1' color='#e1e1e1'>
                            {snippet?.channelTitle}
                            <CheckCircle  sx={{fontSize:12 , ml:'5px' , color:'grey'}} />
                        </Typography>
                      </Link>

                      <Stack direction='row' alignItems='center' gap='20px'>

                      <Typography variant="body1" sx={{opacity:'0.7'}}>

                        {parseInt(statistics?.viewCount).toLocaleString()} Views

                      </Typography>

                      <Typography variant="body1" sx={{opacity:'0.7'}}>

                        {parseInt(statistics?.likeCount).toLocaleString()} Likes

                      </Typography>


                    </Stack>

                  </Stack>
               </Box>
            </Box>
         <Box px={2} py={{md:1,xs:5}} justifyContent='center'>

            <Videos videos={relatedvideo} directionXs={'row'} directionMd={'column'} />

         </Box>
         </Stack>

      </Box>
   );
};

export default VedioDetails;
