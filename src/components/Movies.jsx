import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Movie from "./Movie";
import "../styles/movies.scss";
import { useSelector, useDispatch } from "react-redux";
import moviesSlice, { fetchMovies } from "../data/moviesSlice";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Spinner from "./Spinner";

const Movies = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const { movies, fetchStatus, currentPage } = useSelector(
    (state) => state.movies
  );
  const { incrementPage } = moviesSlice.actions;
  const isLoading = fetchStatus === "loading";

  const loadMoreMovies = () => {
    dispatch(incrementPage());
    dispatch(fetchMovies({ query: searchQuery, page: currentPage }));
  };

  useInfiniteScroll(loadMoreMovies, isLoading);

  useEffect(() => {
    if (currentPage === 1) {
      loadMoreMovies();
    }
  }, [currentPage]);

  return (
    <div data-testid="movies" className="movies-container">
      {movies &&
        movies.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      {isLoading && <Spinner size="medium" />}
    </div>
  );
};

export default Movies;
