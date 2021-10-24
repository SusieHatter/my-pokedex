import "./App.css";
import logo from "./images/logo.png";

import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div className="app">
      <img className="logo" src={logo} alt="pokemon logo" />
      {Array.from({ length: 150 }).map((_, i) => {
        const id = i + 1;
        return <PokemonCard id={id} key={id} />;
      })}
    </div>
  );
}

export default App;
