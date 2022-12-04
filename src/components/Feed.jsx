import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {

  const [selectedCategory,setselectedCategory] = useState('New')

  const [videos,setvideos] = useState([])

  useEffect(  ()=>{

      fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((response)=>setvideos(response.items))
    
  },[selectedCategory])

   return (
      <Stack
         sx={{
            flexDirection: { sx: "column", md: "row" },
         }}
      >
         <Box
            sx={{
               height: { sx: "auto", md: "92vh" },
               borderRight: "1px solid #3d3d3d",
               px: { sx: 0, md: 2 },
            }}
         >
            <SideBar 
              selectedCategory={selectedCategory} 
              setselectedCategory={setselectedCategory}
              />

            <Typography 
               variant="body2"
               className="copyright"
               sx={{
                  color: "#fff",
                  display:{xs:'none',md:'block'}
               }}
            >
               Copyright @Webjr 2022
            </Typography>
         </Box>

         <Box p={2} sx={{overflowY:'auto', height:'90vh',flex:2}}>
            <Typography
               variant="h4"
               mb={2}               
               sx={{ color: "#fff" , fontWeight:'bold'}}
            >
               {selectedCategory} <span style={{ color: "#f31503" }}>Video</span>
            </Typography>

            <Videos videos = {videos} />

         </Box>
      </Stack>
   );
};

export default Feed;
