import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchVideosByKeyWord, updateSearchKey } from '../utils/videoListSlice';

const ButtonList = ({name, onClick}) => (
  <button 
  onClick={onClick}
  className='px-5 text-sm bg-[#212121] font-medium hover:bg-[#606060] text-white rounded-lg m-2 py-1'>
  {name}
  </button>
)

  const Button = () => {
    const dispatch = useDispatch();
  
    const handlefetchVideos = async (searchKey) => {
      dispatch(
        updateSearchKey({
          searchKey: searchKey,
        })
      );
      dispatch(fetchVideosByKeyWord(searchKey));
    }
    
    const btnList = [
      "Music",
      "Gaming",
      "Roasts",
      "JavaScript",
      "Mixes",
      "Playlists",
      "Arijit",
      "Albums",
      "Watched",
      "DJ",
      "remix",
    ];

  return (
    <div
    className='flex'
    >
     {btnList.map((name, index) => (
       <ButtonList
         key={index}
         name={name}
         onClick={() => handlefetchVideos(name)}
       />

     ))}
   </div>
  )
}

export default Button


      