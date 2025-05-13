import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {

  const toggle = useSelector((store)=>store.app.isMenuOpen)

  if(!toggle) return null;
  
  return (
    <div className='p-5 shadow-lg w-56 flex-shrink-0 mx-3'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className='font-bold pt-3'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
      </ul>
      <h1 className='font-bold pt-3'>More from YouTube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>Youtube Music</li>
        <li>YouTube Kids</li>
      </ul>
    </div>
  )
}

export default SideBar