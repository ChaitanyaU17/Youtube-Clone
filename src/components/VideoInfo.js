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
      } catch (error) {
        console.error('Error fetching video info:', error);
      }
    };

    if (videoId) {
      fetchVideoInfo();
    }
  }, [videoId]);

  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, description, thumbnails } = snippet;

  return (
    <div className="flex flex-col text-white p-4">
      <img src={thumbnails.medium.url} alt={title} className="w-full h-auto rounded-lg" />
      <h1 className="text-xl font-bold mt-4">{title}</h1>
      <h2 className="text-md text-gray-400">{channelTitle}</h2>
      <p className="text-sm mt-2">{description}</p>
      <p className="text-sm text-gray-400 mt-2">{statistics.viewCount} views</p>
    </div>
  );
};

export default VideoInfo;
