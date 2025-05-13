import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const VideoCard = ({video}) => {

  const {snippet,statistics} = video;
  const {channelTitle,title,thumbnails} = snippet;


  return (
    <div className='flex flex-col w-64 p-2 m-3 h-96 shadow-lg rounded-lg'>
    <img className="w-72" src={thumbnails.high.url} alt='thumbnail'/>
    <ul>
        <li className='font-bold break-words w-full'>{title}</li>
        <li className='py-1'>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
    </ul>
        
    </div>
  )
}

export default VideoCard