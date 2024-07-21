import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { addMessage } from '../store/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import { IoSend } from "react-icons/io5";


const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
       const i = setInterval(() => {
            //api polling
            // console.log('api polling');

            dispatch(addMessage({
              id: uuidv4(),
              name: generateRandomName(),
              message: makeRandomMessage(20),
            })
        );
        }, 3000);
        
        return () => clearInterval(i);
    }, );

  return (
    <>
      <div className="p-2 ml-2 rounded border border-white w-full h-[410px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c) => (
          <ChatMessage key={c.id} name={c.name} message={c.message} />
        ))}
      </div>

      <form className="w-[95%] p-2 flex" onSubmit={(e) => {
        e.preventDefault();
        console.log('on form submit', liveMessage);
        dispatch( addMessage({
          name: 'Chaitanya',
          message: liveMessage,
        })
      )
      setLiveMessage('');
      }}>
        <input
          type="text"
          placeholder="write live chat msg"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value)
          }}
          className="w-full p-1 bg-black text-white  border border-white rounded-lg"
        />
        <button className='px-4 '><IoSend /></button>
      </form>
    </>
  );
}

export default LiveChat;
