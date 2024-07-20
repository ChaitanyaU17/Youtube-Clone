import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({ info }) => {
    //console.log(info);
    if (!info || !info.snippet || !info.statistics) return null;
  
    const { snippet, statistics, id } = info;
    const { channelTitle, title, thumbnails } = snippet;
    let videoId = id?.videoId ? id.videoId : id;
    if (!videoId) return <></>;

  return (
    <Link to={`/watch?v=${videoId}`}>
    <div className='p-2 m-4 max-w-[22rem] max-h-[370px] text-white'>
       <img 
       className='rounded-lg w-[22rem]'
       alt="thumbnail" 
       src={thumbnails.medium.url} 
       />
       <ul className='leading-6'>
        <li className='text-lg font-semibold pt-1.5'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
       </ul>
    </div>
    </Link>
  )
};

// export const AdCard = ({ info }) => {
//   return (
//     <div className='p-1 m-1 border border-red-500'>
//       <VideoCard info={info}/>
//     </div>
//   )
// }

export default VideoCard
