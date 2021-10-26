import "./PokemonCard.css";

const mapTypeToColor = {
  fire: "#ec3535ea",
  grass: "#27a86ce3",
  electric: "#fff45ecb",
  water: "#3952c4e8",
  ground: "#8b6b4ce0",
  rock: "#929291d8",
  fairy: "#ffa3e8d5",
  poison: "#ad60bdd5",
  bug: "#77d85fe5",
  dragon: "#6f8bc0d2",
  psychic: "#da9022ec",
  flying: "#faa583c5",
  fighting: "#f56685c9",
  normal: "#eaf5f4dc",
  ghost: "#441b5fe8",
  ice: "#35e6ecea",
};

export function displayNumber(id) {
  if (id < 100) {
    return "#0" + id;
  } else {
    return "#" + id;
  }
}

export function displayName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const PokemonCard = ({ id, name, sprites, types }) => {
  return (
    <div
      className="pokemon-card"
      style={{ backgroundColor: mapTypeToColor[types[0].type.name] }}
    >
      <img src={sprites.front_default} alt={name} />
      <span>{displayNumber(id)}</span>
      <h3>{displayName(name)}</h3>
    </div>
  );
};

export default PokemonCard;
