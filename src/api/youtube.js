import axios from "axios";


//https://www.googleapis.com/youtube/v3/search

const youTube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
  // params: {
  //   part: 'snippet', 
  //   type: 'video',
  //   maxResults: 5,
  //   key: `${}`
  // }
})


export default youTube;
