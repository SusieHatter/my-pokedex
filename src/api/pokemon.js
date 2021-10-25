const BASE_URL = "https://pokeapi.co/api/v2";

const pokemonCache = new Map();

export const getPokemon = async (id) => {
  if (pokemonCache.has(id)) {
    return pokemonCache.get(id);
  }
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  const pokemon = await res.json();
  pokemonCache.set(id, pokemon);
  return pokemon;
};

export const getPokemons = async (startID, endID) => {
  const promises = [];
  for (let id = startID; id <= endID; id++) {
    promises.push(getPokemon(id));
  }
  return Promise.all(promises);
};
