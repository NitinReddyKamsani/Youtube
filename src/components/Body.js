import React from 'react'
import SideBar from "./SideBar"
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
        <SideBar />
        <Outlet className="flex-1" />
    </div>
  )
}

export default Body