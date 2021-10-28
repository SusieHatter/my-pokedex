import "./PokemonCard.css";
import { displayName, displayNumber } from "../utils/display";
import { getTypeColor } from "../utils/colors";

const PokemonCard = ({ id, name, sprites, types, spriteName, onClick }) => {
  if (!spriteName) {
    spriteName = "front_default";
  }
  if (!onClick) {
    onClick = () => {};
  }
  return (
    <div
      className="pokemon-card"
      style={{ backgroundColor: getTypeColor(types, 1) }}
      onClick={onClick}
    >
      <img src={sprites[spriteName]} alt={name} />
      <span className="pokemon-id">{displayNumber(id)}</span>
      <h3>{displayName(name)}</h3>
    </div>
  );
};

export default PokemonCard;
