import { usePokemon } from "../hooks/pokemon";

import "./PokemonCard.css";

const PokemonCard = ({ id }) => {
  const pokemon = usePokemon(id);
  if (!pokemon) {
    return <></>;
  }
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
