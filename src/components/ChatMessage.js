import React from 'react'
import CommentLogo from '../Assets/comment-logo.png'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center p-2'>
      <img
            className="h-7 w-7 rounded-full mr-2 flex "
            src={CommentLogo}
            alt="comment-logo"
          />
          <span className='font-bold opacity-70 px-2'>{name}</span>
          <span>{message}</span>
    </div>
  )
}

export default ChatMessage
