import React, { useEffect } from 'react'
import ChatMessage from './chatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import { getRandomMessage, getRandomName } from '../utils/helper';


const LiveChat = () => {

  const dispatch = useDispatch();
  const messages = useSelector((store)=>store.chat.messages);

  useEffect(()=>{

    const i = setInterval(()=>{
      dispatch(addMessage({
        name : getRandomName(),
        message : getRandomMessage()
      }))
    },2000)

    return ()=>{
      clearInterval(i);
    }

  },[])

  return (
    <div className='ml-2 px-3 py-2 h-[500px] w-full border border-black bg-slate-100 rounded-md p-2 overflow-scroll flex flex-col-reverse'>
      {
        messages.map((c,index)=><ChatMessage key={index} name={c.name} message={c.message} />)
      }
    </div>
  )
}

export default LiveChat