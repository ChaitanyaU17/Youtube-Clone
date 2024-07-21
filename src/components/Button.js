import React from 'react'

const ButtonList = ({ name, onClick }) => (
  <button
    className='px-5 text-sm bg-[#212121] font-medium hover:bg-[#606060] text-white rounded-lg m-2 py-1'>
    {name}
  </button>
)

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
    <div className='flex'>
      {btnList.map((name, index) => (
        <ButtonList
          key={index}
          name={name}
        />
      ))}
    </div>
  )
}

export default Button;
