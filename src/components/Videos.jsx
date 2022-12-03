import React from 'react'

import { Stack , Box } from '@mui/system';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

const Videos = ({videos , directionXs , directionMd}) => {
  console.log(videos);  
  return (
    <Stack 
      direction={{ xs:directionXs , md:directionMd || 'row' }}
      flexWrap='wrap' 
      justifyContent="center" 
      gap={2}
      >

        {
          videos.map((item,index) => (
            <Box key={index}>
              
              {item.id.channelId && <ChannelCard channelDetail={item} />} 
              {item.id.videoId && <VideoCard video={item} />}
            </Box>
          ))
        }

    </Stack>
  )
}

export default Videos