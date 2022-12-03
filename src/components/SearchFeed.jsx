import { useState, useEffect } from "react";
import { Box,  Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const {searchTerm} = useParams()
  

  const [videos,setvideos] = useState([])

  useEffect(  ()=>{

      fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((response)=>setvideos(response.items))
    
  },[searchTerm])

   return (     
         <Box p={2} sx={{overflowY:'auto', height:'90vh',flex:2}}>
            <Typography
               variant="h4"
               mb={2}               
               sx={{ color: "#fff" , fontWeight:'bold'}}
            >
               <span style={{paddingLeft:'15px'}}> Search Result for </span><span style={{ color: "#f31503" }}>{capitalizeFirstLetter(searchTerm)}</span>
            </Typography>

            <Videos videos = {videos} />

         </Box>
   );
};

export default Feed;
