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
      <PokemonCard {...pokemon} />
    </div>
  );
}
