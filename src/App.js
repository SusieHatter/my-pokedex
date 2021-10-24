import "./App.css";

import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div className="app">
      {Array.from({ length: 150 }).map((_, i) => {
        const id = i + 1;
        return <PokemonCard id={id} key={id} />;
      })}
    </div>
  );
}

export default App;
