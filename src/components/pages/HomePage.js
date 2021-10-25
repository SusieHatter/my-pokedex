import { A } from "hookrouter";
import PokemonCard from "../PokemonCard";
import "./HomePage.css";
import { usePokemons } from "../../hooks/pokemon";

export default function HomePage() {
  const pokemons = usePokemons(1, 150);
  return (
    <div className="home-page">
      <div className="list">
        {pokemons.map((pokemon, i) => {
          const id = i + 1;
          return (
            <A key={id} href={`/pokemon/${id}`}>
              <PokemonCard {...pokemon} />
            </A>
          );
        })}
      </div>
    </div>
  );
}
