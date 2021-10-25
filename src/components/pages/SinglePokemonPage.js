import { usePokemon } from "../../hooks/pokemon";
import PokemonCard from "../PokemonCard";
import "./SinglePokemonPage.css";

export default function SinglePokemonPage({ id }) {
  const pokemon = usePokemon(id);
  if (!pokemon) {
    return <></>;
  }
  return (
    <div className="pokemon-page">
      <div className="card-container">
        <PokemonCard {...pokemon} />
      </div>
      <div className="information">
        <h1>Pokemon data</h1>
        <p>{pokemon.species.name}</p>
      </div>
    </div>
  );
}
