import * as api from '../api/api.js'


export async function getAllGames() {
  return api.get("/data/games?sortBy=_createdOn%20desc&distinct=category");
}

export async function getAllGamesForCatalog() {
  return api.get("/data/games?sortBy=_createdOn%20desc");
}



export async function getGameById(id) {
  return api.get(`/data/games/` + id);
}

// export async function getMyItem(userId) {
//   return api.get(
//     `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
//   );
// }

export async function createGame(game) {
  return api.post("/data/games", game);
}

export async function editGame(id, game) {
  return api.put("/data/games/" + id, game);
}

export async function delGameById(id) {
  return api.del("/data/games/" + id);
}
