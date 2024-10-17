import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../services/getMovies";

export const fetchMovies = createAsyncThunk("fetch-movies", getMovies);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    fetchStatus: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.fetchStatus = "success";
      })
      .addCase(fetchMovies.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.fetchStatus = "error";
      });
  },
});

export default moviesSlice;
