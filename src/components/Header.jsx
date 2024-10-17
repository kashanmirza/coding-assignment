import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react"; // Import useState
import { createSearchParams, useSearchParams } from "react-router-dom";
import { fetchMovies } from "../data/moviesSlice";
import "../styles/header.scss";

const Header = ({ searchMovies }) => {
  const { starredMovies } = useSelector((state) => state.starred);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const getSearchResults = (query) => {
    dispatch(fetchMovies(query));
  };

  useEffect(() => {
    getSearchResults(query);
    setSearchParams(
      query ? createSearchParams({ search: query }) : createSearchParams({})
    );
  }, [query]);

  return (
    <header>
      <Link to="/" data-testid="home" onClick={() => searchMovies("")}>
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
