const baseUrl = process.env.REACT_APP_ENDPOINT;
const key = process.env.REACT_APP_API_KEY;

export const createApiEndpoint = (endPoint,queryString="") => `${baseUrl}${endPoint}?api_key=${key}${queryString}`