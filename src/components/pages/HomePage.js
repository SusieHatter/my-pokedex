import { A } from "hookrouter";
import { useAsync } from "react-async";
import PokemonCard from "../PokemonCard";
import "./HomePage.css";
import { getPokemons } from "../../api/pokemon";

export default function HomePage() {
  const { data: pokemons, isPending } = useAsync(getPokemons, {
    startID: 1,
    endID: 150,
  });

  if (isPending) {
    return <></>;
  }

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
