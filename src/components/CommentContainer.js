import React from 'react'
import { User_icon } from '../utils/constants'

const CommentContainer = () => {

  const CommentData = [
    {
        name : "Nitin Reddy",
        text : "This is nested comment section",
        replies : []
    },
    {
        name : "Nitin Reddy",
        text : "This is nested comment section",
        replies : [ {
            name : "Nitin Reddy",
            text : "This is nested comment section",
            replies : []
        },]
    },
    {
        name : "Nitin Reddy",
        text : "This is nested comment section",
        replies : [ {
            name : "Nitin Reddy",
            text : "This is nested comment section",
            replies : []
        },]
    },
    {
        name : "Nitin Reddy",
        text : "This is nested comment section",
        replies : [ {
            name : "Nitin Reddy",
            text : "This is nested comment section",
            replies : [ {
                name : "Nitin Reddy",
                text : "This is nested comment section",
                replies : []
            },]
        },]
    },
    {
        name : "Nitin Reddy",
        text : "This is nested comment section",
        replies : []
    },
    {
        name : "Nitin Reddy",
        text : "This is nested comment section",
        replies : []
    },
    {
        name : "Nitin Reddy",
        text : "This is nested comment section",
        replies : [ {
            name : "Nitin Reddy",
            text : "This is nested comment section",
            replies : []
        },]
    },

  ]

  const Comment = ({data})=>{

    const {name,text,replies} = data;

    return (
    <div className='flex py-2 bg-gray-100 shadow-md rounded-md my-2'>
    <img className="w-10 h-10" src={User_icon} alt="user-icon" />
    <div className='px-2'>
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
    </div>
    </div>
    )

  }

  const CommentList = ({comments}) =>{

    return comments.map((comment,index)=> ( 
        <div key={index}>
        <Comment key={index} data={comment} />
        <div className='pl-5 border border-l-black ml-5'>
            <CommentList comments={comment.replies}/>
        </div>
        </div>))
  }

  return (
    <div className='m-2 p-2'>
    <h1 className='font-bold text-xl'>Comments:</h1>
    <CommentList comments={CommentData} />
    </div>
  )
}

export default CommentContainer