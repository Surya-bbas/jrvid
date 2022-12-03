import React from "react";
import { Box, CardContent, CardMedia, Typography, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import {
   demoProfilePicture,
   demoChannelUrl,
   demoChannelTitle,
} from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
   console.log(
      
      channelDetail
   );
   return (
      <Box
         sx={{
            borderRadius: "20px",
            boxShadow: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "356px", md: "320px" },
            height: "326px",
            mt: marginTop,
            mx: "auto",
         }}
      >
         <Link
            to={`/channel/${channelDetail?.id?.channelId}` || demoChannelUrl}
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               flexDirection: "column",
               textAlign: "center",
            }}
         >
            <CardMedia
               image={
                  channelDetail?.snippet?.thumbnails?.high?.url ||
                  demoProfilePicture
               }
               alt={channelDetail?.snippet?.channelTitle}
               sx={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  border: "1px soild #e3e3e3",
               }}
            />

            <CardContent>
               <Typography variant="h6" sx={{ color: "#fff" }}>
                  {channelDetail?.snippet?.channelTitle || channelDetail?.snippet?.title || 'Loading...'}
                  <CheckCircle
                     sx={{ fontSize: 14, ml: "5px", color: "grey" }}
                  />
               </Typography>

               {channelDetail?.statistics?.subscriberCount && (
                  <Typography sx={{color: "#e1e1e1"}} >
                     {parseInt(
                        channelDetail?.statistics?.subscriberCount
                     ).toLocaleString()} <span> Subscriber</span> 
                  </Typography>
               )}

            </CardContent>
         </Link>
      </Box>
   );
};

export default ChannelCard;
