import { usePokemon } from "../hooks/pokemon";
import "./PokemonCard.css";

const mapTypeToColor = {
  fire: "#f57070d2",
  grass: "#27a86ce3",
  electric: "#fff45ecb",
  water: "#6ebfe4e8",
  ground: "#8b6b4ce0",
  rock: "#929291d8",
  fairy: "#ffa3e8d5",
  poison: "#ad60bdd5",
  bug: "#77d85fe5",
  dragon: "#6f8bc0d2",
  psychic: "#d6b16ce0",
  flying: "#faa583c5",
  fighting: "#f56685c9",
  normal: "#a8a8a8dc",
};

const PokemonCard = ({ id }) => {
  const pokemon = usePokemon(id);
  if (!pokemon) {
    return <></>;
  }
  return (
    <div
      className="pokemon-card"
      style={{ backgroundColor: mapTypeToColor[pokemon.types[0].type.name] }}
    >
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
