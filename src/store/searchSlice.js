import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GOOGLE_API_KEY } from '../utils/constants';

export const fetchSearchResults = createAsyncThunk(
    'search/fetchSearchResults',
    async (query) => {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=${GOOGLE_API_KEY}`);
      const data = await response.json();
      return data.items;
      console.log(data);
    }
  );

const searchSlice = createSlice ({
    name: "search",
    initialState: {
        query: '',
        results: [],
        status: 'idle',
    },
    reducers: {
           cacheResults: (state, action) => {
            state = Object.assign(state, action.payload);
           },
           setQuery(state, action) {
            state.query = action.payload;
          },
        },
        extraReducers: (builder) => {
          builder
            .addCase(fetchSearchResults.pending, (state) => {
              state.status = 'loading';
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
              state.status = 'succeeded';
              state.results = action.payload;
            })
            .addCase(fetchSearchResults.rejected, (state) => {
              state.status = 'failed';
            });
        },
    }
)

export const {cacheResults, setQuery } = searchSlice.actions;

export default searchSlice.reducer;