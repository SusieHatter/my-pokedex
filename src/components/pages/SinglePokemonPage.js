import { useState } from "react";
import { usePokemon } from "../../hooks/pokemon";
import { getTypeColor } from "../../utils/colors";
import { displayName, displayNumber } from "../../utils/display";
import { getSpriteNames } from "../../utils/sprites";
import PokemonCard from "../PokemonCard";
import StatsChart from "../StatsChart";
import "./SinglePokemonPage.css";

export default function SinglePokemonPage({ id }) {
  const pokemon = usePokemon(id);
  const [spriteIndex, setSpriteIndex] = useState(0);

  if (!pokemon) {
    return <></>;
  }

  console.log(pokemon);
  const spritesNames = getSpriteNames(pokemon.sprites, "front");
  const nextSpriteIndex = () =>
    setSpriteIndex((spriteIndex + 1) % spritesNames.length);
  const spriteName = spritesNames[spriteIndex];

  return (
    <div className="pokemon-page">
      <div className="card-container">
        <PokemonCard
          {...pokemon}
          spriteName={spriteName}
          onClick={nextSpriteIndex}
        />
      </div>
      <div className="information">
        <h2>
          {displayNumber(pokemon.id)} {displayName(pokemon.name)}
        </h2>
        <div>
          <div className="col">
            <p>
              Type:
              {pokemon.types.map((t, i) => (
                <span
                  key={i}
                  className="type-name"
                  style={{ backgroundColor: getTypeColor(t) }}
                >
                  {t.type.name}
                </span>
              ))}
            </p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </div>
          <div className="col">
            <StatsChart stats={pokemon.stats} types={pokemon.types} />
          </div>
        </div>
      </div>
    </div>
  );
}
