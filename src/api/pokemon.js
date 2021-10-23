const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemon = async (id) => {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  const pokemon = await res.json();
  return pokemon;
};
