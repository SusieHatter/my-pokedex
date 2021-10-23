import { useState, useEffect } from "react";
import { getPokemon } from "../api/pokemon";

export function usePokemon(id) {
  const [pokemon, setPokemon] = useState(undefined);
  useEffect(() => {
    getPokemon(id)
      .then((pokemon) => setPokemon(pokemon))
      .catch(() => setPokemon(undefined));
  }, [id]);
  return pokemon;
}
