import React, {useEffect, useState} from "react";
import ytLogo from "../Assets/yt-logo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils//constants";
import search from "../Assets/search.png";

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    //API call
    //console.log(searchQuery);

    //make an API call after every keypress
    //but if the difference between 2 API call is <200ms
    //decline the API call
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer)
    };

  }, [searchQuery])

  // key - i
  // render the component
  // useEffect()
  // start timer => make an API call after 200ms 

  // key - ip
  // re- render the component
   // useEffect()
  // start timer => make an API call after 200ms (new timer for each variable)

  // if i press key even before 200ms then the component gets destroy triggered reconciliation process 
  // perform return (clearTimeout) and again new component re-render

  const getSearchSuggestion = async () => {
    const data = await (fetch(YOUTUBE_SEARCH_API + searchQuery));
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);
  }

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg ">
      <div className="flex col-span-1 ">
        <img
        onClick={() => toggleMenuHandler()}
        className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
        <img
        className="h-8 mx-2"
          alt="yt-logo"
          src={ytLogo}
        />
        </a>
      </div>
      <div className="col-span-10 justify-items-center pl-28">
        <div className="flex items-center">
        <input 
        className="w-1/2 border px-5 py-2 border-gray-400 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-200 focus:shadow-md"
        type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestion(true)}
        onBlur={() => setShowSuggestion(false)}
        />
         <button className="py-[10px] border border-gray-400 bg-gray-100 rounded-r-full px-5 flex items-center justify-center border-l-0">
            <img className="h-5 w-5" src={search} alt="search-icon" />
          </button>
        </div>
        { showSuggestion && 
        (<div 
        className="fixed bg-white w-[26.3rem] rounded-lg mt-1 border border-gray-100 shadow-lg">
          <ul>
            {suggestions.map((s) => <li key={s} className="py-1 px-5 flex items-center hover:bg-gray-100">
              <img className="h-3.5 w-3.5 mr-2 opacity-70" src={search} alt="search-icon" />{s}</li> 
            )}
          </ul>
        </div>)}
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
