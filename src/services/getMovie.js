import { createApiEndpoint } from "../helpers/createApiEndpoint";
import { MOVIE_BY_ID } from "../constants/endPoints";
export const getMovie = async (id) => {
  try {
    const movieEndpoint = createApiEndpoint(
      `${MOVIE_BY_ID}${id}`,
      "append_to_response=videos"
    );
    const response = await fetch(movieEndpoint);
    return response.json();
  } catch (e) {
    throw new Error("Error in getting Movie ", e);
  }
};
