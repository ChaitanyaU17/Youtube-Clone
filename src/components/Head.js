import React, { useEffect, useState, useCallback } from "react";
import ytLogo from "../Assets/yt-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import search from "../Assets/search.png";
import { cacheResults } from "../utils/searchSlice";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import {
  fetchVideosByKeyWord,
  reloadTheHomePageVideos,
  updateSearchKey,
} from '../utils/videoListSlice';
import axios from "axios";
import { HiUserCircle } from "react-icons/hi";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getSuggestions = useCallback(async () => {
    if (!searchQuery) return;
    try {
      if (searchQuery in searchCache) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        const response = await axios.get(YOUTUBE_SEARCH_API + searchQuery);
        if (response.data && response.data[1]) {
          setSuggestions(response.data[1]);

          dispatch(
            cacheResults({
              [searchQuery]: response.data[1],
            })
          );
        } else {
          setSuggestions([]);
        }
      }
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  }, [searchQuery, searchCache, dispatch]);

  const getSearchKeyVideos = (searchKey) => {
    navigate({
      pathname: "/results",
      search: createSearchParams({
        search_query: searchKey,
      }).toString(),
    });
    setSearchQuery(searchKey);
    setShowSuggestion(false);
    dispatch(updateSearchKey({ searchKey }));
    dispatch(fetchVideosByKeyWord(searchKey));
  };

  const handleFindVideosBySearchKey = () => getSearchKeyVideos(searchQuery);

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      getSearchKeyVideos(searchQuery);
    }
  };

  const handleReloadMainPage = () => {
    dispatch(reloadTheHomePageVideos());
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => getSuggestions(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery, getSuggestions]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="sticky top-0 z-50 bg-black grid grid-flow-col h-16 shadow-lg">
      <div className="flex col-span-1 items-center px-6">
        <img
          onClick={toggleMenuHandler}
          className="h-5 cursor-pointer"
          alt="menu"
          src="https://i.pinimg.com/736x/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg"
        />
        <Link to="/">
          <img
            className="h-[22px] mx-4"
            alt="yt-logo"
            src={ytLogo}
            onClick={handleReloadMainPage}
          />
        </Link>
      </div>
      <div className="col-span-10 pt-3">
        <div className="flex items-center ml-12 w-[65%]">
          <input
            className="w-full text-white placeholder:text-gray-400 px-5 py-2 rounded-l-full
                       focus:outline-none focus:ring-2 focus:ring-opacity-10 focus:ring-blue-600 
                       focus:border-blue-500 focus:shadow-md bg-black border border-gray-500 
                       border-opacity-40"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onKeyPress={handleEnterPress}
          />
          <button
            className="py-[10px] bg-[#212121] rounded-r-full ml-[0.5px] px-4 flex items-center justify-center"
            onClick={handleFindVideosBySearchKey}
          >
            <img className="h-6 w-7 opacity-85" src={search} alt="search-icon" />
          </button>
        </div>
        {showSuggestion && suggestions.length > 0 && (
          <div className="fixed ml-12 bg-[#212121] min-w-[43%] rounded-xl mt-1 
                          border border-black shadow-lg text-white"
               onMouseDown={(e) => e.preventDefault()}>
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-1.5 px-5 flex items-center hover:bg-[#606060]"
                  onMouseDown={() => getSearchKeyVideos(s)} // onMouseDown instead of onClick to prevent losing focus
                >
                  <img
                    className="h-3.5 w-3.5 mr-2 opacity-70"
                    src={search}
                    alt="search-icon"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex items-center">
        <HiUserCircle className="h-8" />
      </div>
    </div>
  );
};

export default Head;





































// import React, { useEffect, useState } from "react";
// import ytLogo from "../Assets/yt-logo.png";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleMenu } from "../utils/appSlice";
// import { YOUTUBE_SEARCH_API } from "../utils//constants";
// import search from "../Assets/search.png";
// import { cacheResults } from "../utils/searchSlice";

// // const Head = () => {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [suggestions, setSuggestions] = useState([]);
// //   const [showSuggestion, setShowSuggestion] = useState(false);
// //   const searchCache = useSelector((store) => store.search);

// //   useEffect(() => {
// //     //API call
// //     //console.log(searchQuery);

// //     //make an API call after every keypress
// //     //but if the difference between 2 API call is <200ms
// //     //decline the API call

// //     const timer = setTimeout(() => {
// //       if (searchCache[searchQuery]) {
// //         setSuggestions(searchCache[searchQuery]);
// //       } else {
// //         getSearchSuggestion();
// //       }
// //     }, 200);

// //     return () => {
// //       clearTimeout(timer);
// //     };
// //   }, [searchQuery]);

// //   // key - i
// //   // render the component
// //   // useEffect()
// //   // start timer => make an API call after 200ms

// //   // key - ip
// //   // re- render the component
// //   // useEffect()
// //   // start timer => make an API call after 200ms (new timer for each variable)

// //   // if i press key even before 200ms then the component gets destroy triggered reconciliation process
// //   // perform return (clearTimeout) and again new component re-render

// //   const getSearchSuggestion = async () => {
// //     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
// //     const json = await data.json();
// //     //console.log(json[1]);
// //     setSuggestions(json[1]);

// //     //update cache
// //     dispatch(
// //       cacheResults({
// //         [searchQuery]: json[1],
// //       })
// //     );
// //   };

// //   const dispatch = useDispatch();

// //   const toggleMenuHandler = () => {
// //     dispatch(toggleMenu());
// //   };

// const Head = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestion, setShowSuggestion] = useState(false);
//   const searchCache = useSelector((store) => store.search);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const getSearchSuggestion = async () => {
//       const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
//       const json = await data.json();
//       setSuggestions(json[1]);
//       dispatch(
//         cacheResults({
//           [searchQuery]: json[1],
//         })
//       );
//     };

//     const timer = setTimeout(() => {
//       if (searchCache[searchQuery]) {
//         setSuggestions(searchCache[searchQuery]);
//       } else {
//         getSearchSuggestion();
//       }
//     }, 200);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [searchQuery, searchCache, dispatch]);

//   const toggleMenuHandler = () => {
//     dispatch(toggleMenu());
//   };
//   return (
//     <div className="sticky top-0 z-50 bg-black grid grid-flow-col h-16 shadow-lg ">
//       <div className="flex col-span-1 items-center px-6">
//         <img
//           onClick={() => toggleMenuHandler()}
//           className="h-5 cursor-pointer"
//           alt="menu"
//           src="https://i.pinimg.com/736x/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg"
//         />
//         <a href="/">
//           <img
//             className="h-[22px] mx-4"
//             alt="yt-logo"
//             src={ytLogo}
//           />
//         </a>
//       </div>
//       <div className="col-span-10 pt-3">
//         <div className="flex items-center ml-12 w-[65%] ">
//           <input
//            className="
//            w-full text-white placeholder:text-gray-400 px-5 py-2 rounded-l-full
//            focus:outline-none focus:ring-2 focus:ring-opacity-10 focus:ring-blue-600 
//            focus:border-blue-500 focus:shadow-md bg-black border border-gray-500 
//            border-opacity-40"
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onFocus={() => setShowSuggestion(true)}
//             onBlur={() => setShowSuggestion(false)}
//           />
//           <button className="py-[10px] bg-[#212121]
//                              rounded-r-full ml-[0.5px] px-4 flex items-center justify-center">
//             <img className="h-6 w-7 opacity-85" src={search} alt="search-icon" />
//           </button>
//         </div>
//         {showSuggestion && (
//           <div className="fixed  ml-12 bg-[#212121] min-w-[43%] rounded-xl mt-1 
//                           border border-black shadow-lg text-white">
//             <ul>
//               {suggestions.map((s) => (
//                 <li
//                   key={s}
//                   className="py-1.5 px-5 flex items-center hover:bg-[#606060] "
//                 >
//                   <img
//                     className="h-3.5 w-3.5 mr-2  opacity-70"
//                     src={search}
//                     alt="search-icon"
//                   />
//                   {s}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//       <div className="col-span-1 flex items-center">
//         <img
//           className="h-8"
//           alt="user-icon"
//           src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
//         />
//       </div>
//     </div>
//   );
// };

// export default Head;
