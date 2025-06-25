// This file contains an extensive set of sample game data for the new UI.
// It includes:
// 1. REAL free-to-play games that work with the FreeToGame API.
// 2. PREMIUM "AAA" titles with their real Steam AppIDs and new properties
//    like 'source', 'spotlight', and 'rating' to power the advanced UI features.

export const mockGames = [
  // =================================================================
  // === CLICKABLE FREE-TO-PLAY GAMES (Data from FreeToGame API) =====
  // =================================================================
  {
    id: 540,
    title: "Overwatch 2",
    thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
    genre: "Shooter",
  },
  {
    id: 517,
    title: "Lost Ark",
    thumbnail: "https://www.freetogame.com/g/517/thumbnail.jpg",
    genre: "ARPG",
  },
  {
    id: 475,
    title: "Genshin Impact",
    thumbnail: "https://www.freetogame.com/g/475/thumbnail.jpg",
    genre: "Action RPG",
  },
  {
    id: 521,
    title: "Diablo Immortal",
    thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
    genre: "ARPG",
  },
  {
    id: 452,
    title: "Call of Duty: Warzone",
    thumbnail: "https://www.freetogame.com/g/452/thumbnail.jpg",
    genre: "Shooter",
  },
  {
    id: 23,
    title: "Warframe",
    thumbnail: "https://www.freetogame.com/g/23/thumbnail.jpg",
    genre: "Looter-Shooter",
  },
  {
    id: 12,
    title: "Star Wars: The Old Republic",
    thumbnail: "https://www.freetogame.com/g/12/thumbnail.jpg",
    genre: "MMORPG",
  },
  {
    id: 2,
    title: "Hearthstone",
    thumbnail: "https://www.freetogame.com/g/2/thumbnail.jpg",
    genre: "Card Game",
  },
  {
    id: 466,
    title: "Rocket League",
    thumbnail: "https://www.freetogame.com/g/466/thumbnail.jpg",
    genre: "Sports",
  },
  {
    id: 525,
    title: "Fall Guys",
    thumbnail: "https://www.freetogame.com/g/525/thumbnail.jpg",
    genre: "Party Game",
  },
  {
    id: 345,
    title: "Path of Exile",
    thumbnail: "https://www.freetogame.com/g/345/thumbnail.jpg",
    genre: "ARPG",
  },
  {
    id: 21,
    title: "Destiny 2",
    thumbnail: "https://www.freetogame.com/g/21/thumbnail.jpg",
    genre: "Shooter",
  },

  // =================================================================
  // === PREMIUM "AAA" TITLES (With REAL Steam AppIDs and Ratings) ===
  // =================================================================
  {
    id: 1091500,
    source: 'steam',
    title: "Cyberpunk 2077",
    thumbnail: "https://cdn.mobygames.com/covers/5193333-cyberpunk-2077-playstation-4-front-cover.jpg",
    genre: "Action RPG",
    spotlight: true, // This will be our featured game
    rating: 86,
  },
  {
    id: 1174180,
    source: 'steam',
    title: "Red Dead Redemption 2",
    thumbnail: "https://cdn.mobygames.com/covers/4862900-red-dead-redemption-2-xbox-one-front-cover.jpg",
    genre: "Action-Adventure",
    rating: 97,
  },
  {
    id: 292030,
    source: 'steam',
    title: "The Witcher 3: Wild Hunt",
    thumbnail: "https://cdn.mobygames.com/covers/2924376-the-witcher-3-wild-hunt-windows-front-cover.jpg",
    genre: "Action RPG",
    rating: 92,
  },
  {
    id: 1593500,
    source: 'steam',
    title: "God of War",
    thumbnail: "https://cdn.mobygames.com/covers/4207161-god-of-war-playstation-4-front-cover.jpg",
    genre: "Action-Adventure",
    rating: 94,
  },
  {
    id: 1245620,
    source: 'steam',
    title: "ELDEN RING",
    thumbnail: "https://cdn.mobygames.com/covers/5938953-elden-ring-playstation-5-front-cover.jpg",
    genre: "Souls-like RPG",
    rating: 94,
  },
  {
    id: 1888930,
    source: 'steam',
    title: "The Last of Us Part I",
    thumbnail: "https://cdn.mobygames.com/covers/6249257-the-last-of-us-part-i-playstation-5-front-cover.jpg",
    genre: "Action-Adventure",
    rating: 88,
  },
  {
    id: 1086940,
    source: 'steam',
    title: "Baldur's Gate 3",
    thumbnail: "https://cdn.mobygames.com/covers/8741355-baldurs-gate-3-windows-apps-front-cover.jpg",
    genre: "CRPG",
    rating: 96,
  },
  {
    id: 24980,
    source: 'steam',
    title: "Mass Effect 2",
    thumbnail: "https://cdn.mobygames.com/covers/1247475-mass-effect-2-xbox-360-front-cover.jpg",
    genre: "Sci-Fi RPG",
    rating: 94,
  },
];