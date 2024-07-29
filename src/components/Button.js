import React from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../store/searchSlice';

const ButtonList = ({ name }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setQuery(name));
  }

    return (
      <button
        onClick={handleClick}
        className="px-5 text-sm bg-[#212121] font-medium hover:bg-[#606060] text-white rounded-lg m-2 py-1"
      >
        {name}
      </button>
    );
}

const Button = () => {
  
  const btnList = [
    "All",
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
    <div className="flex">
      {btnList.map((name, index) => (
        <ButtonList key={index} name={name} />
      ))}
    </div>
  );
}

export default Button;
