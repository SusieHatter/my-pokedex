import { usePokemon } from "../../hooks/pokemon";
import PokemonCard from "../PokemonCard";
import { displayName, displayNumber } from "../PokemonCard";
import StatsChart from "../StatsChart";
import "./SinglePokemonPage.css";

export default function SinglePokemonPage({ id }) {
  const pokemon = usePokemon(id);
  if (!pokemon) {
    return <></>;
  }
  console.log(pokemon);
  return (
    <div className="pokemon-page">
      <div className="card-container">
        <PokemonCard {...pokemon} />
      </div>
      <div className="information">
        <div>
          <div className="pokemon-title">
            <h2>
              {displayNumber(pokemon.id)} {displayName(pokemon.name)}
            </h2>
          </div>
          <div className="graph">
            <StatsChart stats={pokemon.stats} types={pokemon.types} />
          </div>
        </div>
        <div>
          <div className="biostatistics">
            <p>Type: {pokemon.types[0].type.name}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Stats:</p>
          </div>
        </div>
      </div>
    </div>
  );
}
