import React from "react";
import ytLogo from "../Assets/yt-logo.png"

const Head = () => {
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
        className="h-8"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
        className="h-8 mx-2"
          alt="yt-logo"
          src={ytLogo}
        />
      </div>
      <div className="col-span-10 justify-items-center pl-28">
        <input 
        className="w-1/2 border p-1 border-gray-400 rounded-l-full"
        type="text" 
        />
        <button className="p-1 border border-gray-400 bg-gray-100 rounded-r-full px-2">search</button>
      </div>
      <div className="col-span-1">
        <img
        className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
      </div>
    </div>
  );
};

export default Head;
