import React, { useEffect } from 'react'
import { Youtube_Api } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { videoContainer } from '../utils/appSlice';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const dispatch = useDispatch();

  const videoInfo = useSelector((store)=>store.app.videos);
 
  useEffect(()=>{
    getVideos()
  },[])

  async function getVideos(){
      const data = await fetch(Youtube_Api);
      const json = await data.json()
      //console.log(json);
     dispatch(videoContainer(json.items));
  }


  if(!videoInfo) return null;

  return (
    <div className='flex flex-wrap'>
      {
        videoInfo.map((video)=> (
        <Link key={video.id}  to={"/watch?v=" + video.id}>
        <VideoCard key={video.id} video={video}/>
        </Link>
        ))}
    </div>
  )
}

export default VideoContainer