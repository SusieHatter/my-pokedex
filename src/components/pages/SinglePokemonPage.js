import PokemonCard from "../PokemonCard";
import "./SinglePokemonPage.css";

export default function SinglePokemonPage({ id }) {
  return (
    <div className="pokemon-page">
      <PokemonCard id={id} />
    </div>
  );
}
