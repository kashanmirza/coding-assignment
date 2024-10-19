import { DISCOVER_MOVIES } from "../constants/endPoints";

export const discoverMovies = async () => {
  try {
    const discoverMoviesEndpoint = createApiEndpoint(
      DISCOVER_MOVIES,
      "&sort_by=vote_count.desc"
    );
    const response = await fetch(discoverMoviesEndpoint);
    return response.json();
  } catch (e) {
    throw new Error("Error in getting Movies ", e);
  }
};
