import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../services/getMovies";

export const fetchMovies = createAsyncThunk("fetch-movies", getMovies);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    fetchStatus: "",
    currentPage: 1,
  },
  reducers: {
    resetMovies: (state) => {
      state.movies = [];
      state.currentPage = 1;
    },
    incrementPage: (state) => {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        const newMovies = action.payload.results;
        const existingMovieIds = new Set(state.movies.map((movie) => movie.id));
        const uniqueMovies = newMovies.filter(
          (movie) => !existingMovieIds.has(movie.id)
        );
        state.movies.push(...uniqueMovies);
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

export const { resetMovies, incrementPage } = moviesSlice.actions;

export default moviesSlice;
