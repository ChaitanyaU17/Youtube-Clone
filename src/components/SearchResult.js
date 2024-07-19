import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDataFromApi } from '../utils/helper';
import SearchResultVideoCard from "./SearchResultVideoCard";
import { setLoading } from "../utils/appSlice";

const SearchResult = () => {
  const [result, setResult] = useState([]);
  const { searchQuery } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSearchResults = async () => {
      dispatch(setLoading(true));
      const res = await fetchDataFromApi(`search/?q=${searchQuery}`);
      setResult(res?.contents);
      dispatch(setLoading(false));
    };

    fetchSearchResults();
  }, [searchQuery, dispatch]);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item.video;
            return (
              <SearchResultVideoCard
                key={video.videoId}
                video={video}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
