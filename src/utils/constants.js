export const GOOGLE_API_KEY = "AIzaSyAQR5gLrGqPR9IQwzBEKvTG3EwzOguseM0";


export const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';


export const OFFSET_LIVE_CHAT = 10;

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_INFO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" 

export const getSearchResults = async (searchKey, pageToken='') => {
    let apiKey =  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&pageToken=${pageToken}&q=${searchKey}&key=${GOOGLE_API_KEY}`;
    const data = await fetch(apiKey);
    const json = await data.json();
    return json;
}

export const getYoutubeVideosList = async(pageToken='') => {
    let apiKey = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&pageToken=${pageToken}&regionCode=IN&key=${GOOGLE_API_KEY}`;
    const data = await fetch(apiKey);
    const json = await data.json();
    return json;
}