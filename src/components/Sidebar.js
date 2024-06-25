import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { SiYoutubeshorts } from "react-icons/si";

 const categories = [
    { name: "Home",  icon: <AiFillHome />, type: "home" },
    { name: "Shorts", icon: <SiYoutubeshorts />, type: "shorts" },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <FiFilm />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
  ];

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    return (
      <div className={`pr-6 pl-1 shadow-lg max-w-62 text-white`}>
        <div className="leading-8 flex flex-wrap">
          <ul className='absolute bg-black pr-4'>
            { isMenuOpen ? (categories.map((category, index) => (
              <li key={index} className={`w-52 space-x-4 my-2 hover:bg-[#434242] hover:rounded-lg`}>
                <Link className='flex flex-wrap items-center px-8' to="/">
                  <span className="text-xl">{category.icon}</span>
                  <span className='ml-6 text-[14px]'>{category.name}</span>
                  </Link>
              </li>
            ))
          ) : (
            categories.map((category, index) => (
              <li key={index} className="mb-4 hover:bg-[#2b2a2a] hover:rounded-lg">
                <Link className="flex justify-center px-4" to="/">
                  <span className="text-2xl py-2">{category.icon}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  

      //   <div className="p-5 shadow-lg w-48 text-white">
      //     <div className='leading-8 '>
      //     <ul className='ml-8'>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li className='flex flex-wrap'>
      //         <img
      //         className='h-5 w-5 mr-4'
      //           src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-shorts-white-icon.png"
      //           alt="ytShorts"
      //         />
      //         Shorts
      //       </li>
      //       <li>Subscription</li>
      //     </ul>
      //     <ul >
      //       <h2 className="font-bold pt-4">You</h2>
      //       <li>Your channel</li>
      //       <li>History</li>
      //       <li>Playlists</li>
      //       <li>Your videos</li>
      //       <li>Watch later</li>
      //       <li>Liked videos</li>
      //     </ul>
      //     <ul >
      //       <h2 className="font-bold pt-4">Subscriptions</h2>
      //       <li>Akshay saini</li>
      //       <li>Carryminati</li>
      //       <li>TRS</li>
      //       <li>Tech Dev</li>
      //     </ul>
      //     </div>
      //   </div>
    );
};

export default Sidebar;