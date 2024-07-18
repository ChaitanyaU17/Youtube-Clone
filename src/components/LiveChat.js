import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { addMessage } from '../utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);
    const id = uuidv4();

    useEffect(() => {
       const i = setInterval(() => {
            //api polling
            console.log('api polling');

            dispatch(addMessage({
                name: 'chaitanya',
                message: 'hello live 🔴',
            })
        );
        }, 2000);
        
        return () => clearInterval(i);
    }, []);

  return (
    <div className='p-2 ml-2 border border-white w-full h-[410px] overflow-y-scroll'>
      {chatMessages.map((c) => (
        <ChatMessage key={c.id} name={c.name} message={c.message}/>
      ))}
    </div>
  )
}

export default LiveChat;
