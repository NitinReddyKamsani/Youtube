import React from 'react'
import { User_icon } from '../utils/constants'

const ChatMessage = ({name,message}) => {
  return (
        <div className='flex items-center shadow-sm'>
        <img className='h-8' alt="user-logo" src={User_icon}/> 
        <span className='px-2 font-bold'>{name}</span>
        <span className='px-2'>{message}</span>
        </div>
  )
}

export default ChatMessage;