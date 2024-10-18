import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import starredSlice from "./starredSlice";
import watchLaterSlice from "./watchLaterSlice";
import modalSlice from "./modalSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    starred: starredSlice.reducer,
    watchLater: watchLaterSlice.reducer,
    modal: modalSlice.reducer,
    movie: movieSlice.reducer,
  },
});

export default store;
