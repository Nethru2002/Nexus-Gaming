import axios from 'axios';

// The base URL for Steam's public store API
const STEAM_API_URL = 'https://store.steampowered.com/api';
// We still use the proxy to avoid CORS issues in development
const PROXY_URL = 'https://api.allorigins.win/raw?url=';

/**
 * Fetches detailed information for a single game from Steam using its AppID.
 * @param {number} appId - The numerical AppID of the game on Steam.
 * @returns {Promise<object>} A promise that resolves to the normalized game data.
 */
export const getSteamGameDetails = async (appId) => {
  const fullApiUrl = `${STEAM_API_URL}/appdetails?appids=${appId}`;
  const proxiedUrl = `${PROXY_URL}${encodeURIComponent(fullApiUrl)}`;

  const response = await axios.get(proxiedUrl);

  // Steam's API nests the data under the AppID key.
  const gameData = response.data[appId].data;

  // If the API call wasn't successful, throw an error.
  if (!response.data[appId].success) {
    throw new Error(`Steam API returned an error for AppID: ${appId}`);
  }

  // --- Normalize the data to match our app's structure ---
  const normalizedGame = {
    id: gameData.steam_appid,
    title: gameData.name,
    description: gameData.detailed_description,
    thumbnail: gameData.header_image,
    screenshots: gameData.screenshots?.map(ss => ({
      id: ss.id,
      image: ss.path_full, // Use full-resolution screenshots
    })) || [],
    genre: gameData.genres?.map(g => g.description).join(', ') || 'N/A',
    platform: [
      gameData.platforms?.windows && 'PC',
      gameData.platforms?.mac && 'Mac',
      gameData.platforms?.linux && 'Linux',
    ].filter(Boolean).join(', '), // Creates a clean list like "PC, Mac"
    publisher: gameData.publishers?.join(', ') || 'N/A',
    release_date: gameData.release_date?.date || 'TBA',
    game_url: `https://store.steampowered.com/app/${appId}`, // Direct link to the Steam page
  };

  return normalizedGame;
};