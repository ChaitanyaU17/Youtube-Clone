import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

const VideoInfo = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const fetchVideoInfo = async () => {
            try {
                const response = await fetch(YOUTUBE_VIDEOS_API);
                const json = await response.json();
                console.log(json);
                setInfo(json.items);
            } catch (error) {
                console.error('Error fetching video info:', error);
            }
        }
        fetchVideoInfo();
    }, []);

    return (
        <div className='ml-4 pt-2 max-w-[725px]'>
          <h1>video info</h1>
        </div>
    );
}

export default VideoInfo;
