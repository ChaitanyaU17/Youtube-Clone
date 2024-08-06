import React, { useEffect, useState } from 'react';
import { YOUTUBE_INFO_API } from '../utils/constants';

const VideoInfo = ({ videoId }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const response = await fetch(`${YOUTUBE_INFO_API}&id=${videoId}`);
        const json = await response.json();
        setInfo(json.items[0]);
        console.log(json.items[0]);
      } catch (error) {
        console.error('Error fetching video info:', error);
      }
    };
    
    if (videoId) {
      fetchVideoInfo();
    }
  }, [videoId]);

  if (!info) return <div>Loading...</div>;

  const { snippet, statistics } = info;

  return (
    <div className='ml-4 pt-2 max-w-[725px]'>
      <h1 className='text-2xl font-bold'>{snippet.title}</h1>
      <p className='mt-2'>{snippet.description}</p>
      <p className='mt-2'>Views {statistics.viewCount}</p>
      <p className='mt-2'>Likes {statistics.likeCount}</p>
      <p className='mt-2'>Comments {statistics.commentCount}</p>
    </div>
  );
};

export default VideoInfo;
