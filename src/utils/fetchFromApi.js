import axios from 'axios'

const base_url='https://youtube-v31.p.rapidapi.com'

const options = {
    
    
    params: {
      
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      // process.env.REACT_APP_RAPID_API_KEY
    }
  };


export const fetchFromApi = async (url)=>{
    const response = await axios.get(`${base_url}/${url}`,options)
    return response.data
}