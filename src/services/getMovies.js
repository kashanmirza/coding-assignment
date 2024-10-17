import { createApiEndpoint } from "../helpers/createApiEndpoint";
import {
  DISCOVER_MOVIES,
  SEARCH_MOVIES,
} from "../constants/endPoints";
export const getMovies = async (query) => {
  try {
    const searchMoviesEndpoint = createApiEndpoint(
      SEARCH_MOVIES,
      `&query=${query}`
    );
    const discoverMoviesEndpoint = createApiEndpoint(
      DISCOVER_MOVIES,
      "&sort_by=vote_count.desc"
    );
    const endpoint = query ? searchMoviesEndpoint : discoverMoviesEndpoint;
    const response = await fetch(endpoint);
    return response.json();
  } catch (e) {
    throw new Error("Error in getting Movies ", e);
  }
};
