import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react"; // Import useState
import { createSearchParams, useSearchParams } from "react-router-dom";
import moviesSlice, { fetchMovies } from "../data/moviesSlice";
import "../styles/header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { starredMovies } = useSelector((state) => state.starred);
  const { resetMovies } = moviesSlice.actions;
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const getSearchResults = (query) => {
    dispatch(resetMovies());
    dispatch(fetchMovies({ query, page: 1 }));
  };

  useEffect(() => {
    console.log("Header : ", query);
    if (query) {
      getSearchResults(query);
      setSearchParams(createSearchParams({ search: query }));
    } else {
      dispatch(resetMovies());
      dispatch(fetchMovies({ query: "", page: 1 }));
    }
  }, [query]);

  return (
    <header>
      <Link to="/" data-testid="home">
        <i className="bi bi-film" />
      </Link>

      <nav>
        <NavLink
          to="/starred"
          data-testid="nav-starred"
          className="nav-starred"
        >
          {starredMovies.length > 0 ? (
            <>
              <i className="bi bi-star-fill bi-star-fill-white" />
              <sup className="star-number">{starredMovies.length}</sup>
            </>
          ) : (
            <i className="bi bi-star" />
          )}
        </NavLink>
        <NavLink to="/watch-later" className="nav-fav">
          Watch Later
        </NavLink>
      </nav>

      <div className="input-group rounded">
        <input
          type="search"
          data-testid="search-movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control rounded"
          placeholder="Search movies..."
          aria-label="Search movies"
          aria-describedby="search-addon"
        />
      </div>
    </header>
  );
};

export default Header;
