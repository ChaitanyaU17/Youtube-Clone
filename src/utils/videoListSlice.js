import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { getSearchResults, getYoutubeVideosList } from "./constants";

export const fetchVideos = createAsyncThunk('videosList/fetchVideos', async () => {
  const data = await getYoutubeVideosList();
  return data;
});

export const fetchMoreVideos = createAsyncThunk('videosList/fetchMoreVideos', async ({pageToken}, {getState}) => {
  const state = getState();
  const searchKey = state.videosList.searchKey;
  let data;
  if(searchKey !== '') {
    data = await getSearchResults(searchKey);
  } else {
    data = await getYoutubeVideosList(pageToken);
  }

  return data
});

export const fetchVideosByKeyWord = createAsyncThunk('videosList/fetchVideosByKeyWord', async (searchKey ,{ dispatch}) => {
  const data = await getSearchResults(searchKey);
  return data
});

const initialState = {
  videos: [],
  reloadTheHomePageCounter: 0,
  nextPageToken:'',
  isLoading: false,
  isError: false,
  searchKey: ''
};

const videoListSlice = createSlice({
  name: "videosList",
  initialState,
  reducers: {
    addVideosIntoList: (state, action) => {
      // state.videos = [...state.videos, ...action.payload.videos];
    },
    updateWholeVideoList:  (state, action) => {
      // state.videos = [...action.payload.videos];
    },
    reloadTheHomePageVideos: (state, action) => {
      state.reloadTheHomePageCounter = state.reloadTheHomePageCounter <= 5 ? state.reloadTheHomePageCounter + 1 : 0
    },
    updateSearchKey: (state, action) => {
      state.searchKey = action.payload.searchKey
    }
  },

  
  extraReducers : (builders) => {
    /* ----------- fetch Videos --------------------------- */
    builders.addCase( fetchVideos.pending, (state, action) => {
      state.isLoading = true;
    })
    builders.addCase( fetchVideos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videos = [ ...action.payload.items ];
      state.nextPageToken = action.payload.nextPageToken;
      state.searchKey = '';
    })
    builders.addCase( fetchVideos.rejected, (state, action) => {
      state.isError = true;
    })

    /* ----------------------------------------------------- */

    /* ---------------------- fetch more videos ------------------------- */
    builders.addCase( fetchMoreVideos.pending, (state, action) => {
      state.isLoading = true;
    })
    builders.addCase( fetchMoreVideos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videos = [ ...state.videos,...action.payload.items ];
      state.nextPageToken = action.payload.nextPageToken;
    })
    builders.addCase( fetchMoreVideos.rejected, (state, action) => {
      state.isError = true;
    })
    /* ----------------------------------------------------------------- */

    /* --------------------- fetchVideosByKeyWord ----------------------   */ 
    builders.addCase( fetchVideosByKeyWord.pending, (state, action) => {
      state.isLoading = true;
    })
    builders.addCase( fetchVideosByKeyWord.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log('action.payload -->', action.payload);
      state.videos = [ ...action.payload.items ];
      state.nextPageToken = action.payload.nextPageToken;
    })
    builders.addCase( fetchVideosByKeyWord.rejected, (state, action) => {
      state.isError = true;
    })
  }
});
export const { addVideosIntoList, updateWholeVideoList, reloadTheHomePageVideos, updateSearchKey } = videoListSlice.actions;
export default videoListSlice.reducer;
