import axios from 'axios';

// The target API we want to get data from.
const API_URL = 'https://www.freetogame.com/api';

// A reliable CORS proxy. We pass the target URL to it.
const PROXY_URL = 'https://api.allorigins.win/raw?url=';

/**
 * An Axios client configured to make requests to the FreeToGame API
 * through our CORS proxy. This is used for general endpoints like fetching all games.
 */
const apiClient = axios.create({
  baseURL: `${PROXY_URL}${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetches a list of all games.
 * The final request URL will be: https://api.allorigins.win/raw?url=https://www.freetogame.com/api/games
 * @returns {Promise} An Axios promise for the request.
 */
export const getGames = () => {
  return apiClient.get('/games');
};

/**
 * Fetches the details for a single game by its ID.
 * Since this endpoint has a query parameter, we construct the full URL manually
 * to ensure it's correctly passed to the proxy.
 * @param {string | number} id The ID of the game to fetch.
 * @returns {Promise} An Axios promise for the request.
 */
export const getGameDetails = (id) => {
  const fullApiUrl = `${API_URL}/game?id=${id}`;
  const proxiedUrl = `${PROXY_URL}${encodeURIComponent(fullApiUrl)}`;
  
  // Note: We use a direct axios.get here instead of apiClient because
  // we are constructing the full proxied URL manually.
  return axios.get(proxiedUrl);
};

// You can add more functions here for other API endpoints as needed.
// For example, to filter games by category:
/*
export const getGamesByCategory = (category) => {
  const fullApiUrl = `${API_URL}/games?category=${category}`;
  const proxiedUrl = `${PROXY_URL}${encodeURIComponent(fullApiUrl)}`;
  return axios.get(proxiedUrl);
};
*/