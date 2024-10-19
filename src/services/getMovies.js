import { createApiEndpoint } from "../helpers/createApiEndpoint";
import { DISCOVER_MOVIES, SEARCH_MOVIES } from "../constants/endPoints";
export const getMovies = async ({ query, page }) => {
  console.log(query, page);
  try {
    const searchMoviesEndpoint = createApiEndpoint(
      SEARCH_MOVIES,
      `&query=${query}&page=${page}`
    );
    const discoverMoviesEndpoint = createApiEndpoint(
      DISCOVER_MOVIES,
      `&sort_by=vote_count.desc&page=${page}`
    );

    const endpoint = query ? searchMoviesEndpoint : discoverMoviesEndpoint;
    const response = await fetch(endpoint);
    return response.json();
  } catch (e) {
    throw new Error("Error in getting Movies ", e);
  }
};
