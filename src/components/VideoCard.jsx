import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card ,CardContent ,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl , demoChannelUrl, demoVideoUrl ,demoChannelTitle ,demoVideoTitle, demoProfilePicture } from '../utils/constants'
import { width } from '@mui/system'


const VideoCard = ({video:{id:{videoId},snippet}}) => {

  function handleClick(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  console.log(videoId,snippet);

  return (
    <Card onClick={handleClick()} sx={{width:{ xs:'100%',sm:'358px', md:'320px' } , boxShadow:'none' , borderRadius:'0' }} >

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width:{xs:'100%',sm:'356px',md:'320px'},height:180}}
        />

      </Link>

      <CardContent sx={{height:'106px' , backgroundColor:'#1e1e1e' , borderRadius:'none' , border:'0px' , boxShadow:'none'}}>

        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          
          <Typography variant='subtitle1' fontWeight='bold' sx={{color:'white' }}>

            {snippet?.title.length > 60 ? snippet?.title.slice(0,60)+'...' : snippet?.title}

          </Typography>

        </Link>

        <Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl  } >

          <Typography variant='subtitle2' color={'grey'}>

            {snippet?.channelTitle ? snippet?.channelTitle : demoChannelTitle}
          
            <CheckCircle  sx={{fontSize:12 , ml:'5px'}} />
          </Typography>


        </Link>

      </CardContent>

    </Card>
  )
}

export default VideoCard