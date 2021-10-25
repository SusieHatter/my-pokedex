import { useState, useEffect } from "react";
import { getPokemon, getPokemons } from "../api/pokemon";

export function usePokemon(id) {
  const [pokemon, setPokemon] = useState(undefined);
  useEffect(() => {
    getPokemon(id)
      .then((pokemon) => setPokemon(pokemon))
      .catch(() => setPokemon(undefined));
  }, [id]);
  return pokemon;
}

export function usePokemons(startID, endID) {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons(startID, endID)
      .then((pokemons) => setPokemons(pokemons))
      .catch(() => setPokemons([]));
  }, [startID, endID]);
  return pokemons;
}
