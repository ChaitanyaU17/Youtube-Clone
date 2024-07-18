import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import VideoInfo from './VideoInfo';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className='flex flex-col  ml-14 text-white w-full'>
      <div className='pl-4 pt-3 flex w-full'>
        <div>
        <iframe
          width="733"
          className='rounded-xl'
          height="410"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        </div>
        <div className='w-full mr-4'>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer videoId={videoId} />
      <div>
         <VideoInfo videoId={videoId}/>
      </div>     
    </div>
  );
};

export default WatchPage;
