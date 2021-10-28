import { useState } from "react";
import { usePokemon } from "../../hooks/pokemon";
import { getTypeColor } from "../../utils/colors";
import { displayName, displayNumber } from "../../utils/display";
import PokemonCard from "../PokemonCard";
import StatsChart from "../StatsChart";
import "./SinglePokemonPage.css";

function getSpriteNames(sprites, prefix) {
  // turn sprites object into an array of [spriteName, spriteUrl]
  const spritesArray = Object.entries(sprites);
  // filter out any items in that array, where spriteUrl === null OR spriteName !start_with "front"
  const filteredSpritesArray = spritesArray.filter(
    ([spriteName, spriteUrl]) => {
      const spriteExists = spriteUrl !== null;
      const isFrontSprite = spriteName.startsWith(prefix);
      return spriteExists && isFrontSprite;
    }
  );
  // once we have a list of valid [spriteName, spriteUrl], turn into an array of spriteName
  const spriteNames = filteredSpritesArray.map(
    ([spriteName, _spriteUrl]) => spriteName
  );
  return spriteNames;
}

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
