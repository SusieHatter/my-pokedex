import "./PokemonCard.css";
import { displayName, displayNumber } from "../utils/display";
import { getTypeColor } from "../utils/colors";

const PokemonCard = ({ id, name, sprites, types }) => {
  return (
    <div
      className="pokemon-card"
      style={{ backgroundColor: getTypeColor(types, 1) }}
    >
      <img src={sprites.front_default} alt={name} />
      <span className="pokemon-id">{displayNumber(id)}</span>
      <h3>{displayName(name)}</h3>
    </div>
  );
};

export default PokemonCard;
