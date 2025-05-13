import React from 'react'
import { Hamburger_icon, User_icon, Youtube_icon } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
 
  const dispatch = useDispatch();

  const handleHamburger = () =>{
    dispatch(toggleMenu())
  }


  return (
    <div className="grid grid-flow-col p-5 m-1 shadow-lg">
      <div className='flex col-span-1 gap-3'>
        <img className='h-8 cursor-pointer' alt="hamburger-icon" src={Hamburger_icon} onClick={handleHamburger} />
        <a href='/'>
        <img className="h-8 cursor-pointer" alt="Youtube-icon" src={Youtube_icon}/>
        </a>
      </div>
    <div className='col-span-10 flex justify-center items-center'>
      <div className='flex items-center'>
        <input
           className='w-96 border border-gray-400 rounded-l-full h-10 bg-slate-100 px-4'
           type='text'
           placeholder='search'
        />
        <button className='h-10 border border-gray-400 bg-slate-300 px-4 rounded-r-full flex items-center justify-center'>
        <img className="h-5 w-5" src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png" alt="search" />
        </button>
       </div>
    </div>
      <div className='col-span-1'>
        <img className='h-8' alt="user-logo" src={User_icon}/>
      </div>

    </div>
  )
}

export default Head