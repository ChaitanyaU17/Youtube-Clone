// components/SearchResults.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchResults } from '../store/searchSlice';
import VideoCard from './VideoCard';

const SearchResults = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);
  const status = useSelector((state) => state.search.status);

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchResults(query));
    }
  }, [query, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap">
      {results.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  );
};

export default SearchResults;
