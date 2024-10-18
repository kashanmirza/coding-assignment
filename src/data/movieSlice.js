import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovie } from "../services/getMovie";

export const fetchMovie = createAsyncThunk("fetch-movie", getMovie);

const getVideoKey = (videoData) => {
  if (videoData.videos && videoData.videos.results.length) {
    const trailer = videoData.videos.results.find(
      (vid) => vid.type === "Trailer"
    );
    return trailer ? trailer.key : videoData.videos.results[0].key;
  }
};

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: [],
    videoKey: null,
    fetchStatus: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.videoKey = getVideoKey(action.payload);
        state.fetchStatus = "success";
      })
      .addCase(fetchMovie.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchMovie.rejected, (state) => {
        state.fetchStatus = "error";
      });
  },
});

export default movieSlice;
