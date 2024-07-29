import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API, GOOGLE_API_KEY } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link, useSearchParams } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search_query');

  useEffect(() => {
    const getVideos = async () => {
      try {
        let data;
        if (searchQuery) {
          data = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${GOOGLE_API_KEY}`
          );
        } else {
          data = await fetch(YOUTUBE_VIDEOS_API);
        }
        const json = await data.json();
        setVideos(json.items);
      } catch (error) {
        console.error(error);
      }
    };

    getVideos();
  }, [searchQuery]);

  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => (
        <Link key={video.id.videoId || video.id} to={"/watch?v=" + (video.id.videoId || video.id)}>
          <VideoCard info={video}/>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
