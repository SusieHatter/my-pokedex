import { A } from "hookrouter";
import PokemonCard from "../PokemonCard";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      {Array.from({ length: 150 }).map((_, i) => {
        const id = i + 1;
        return (
          <A key={id} href={`/pokemon/${id}`}>
            <PokemonCard id={id} />
          </A>
        );
      })}
    </div>
  );
}
