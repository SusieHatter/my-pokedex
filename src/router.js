import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";
import SinglePokemonPage from "./components/pages/SinglePokemonPage";

const routes = {
  "/": () => <LandingPage />,
  "/home": () => <HomePage />,
  "/pokemon/:id": ({ id }) => <SinglePokemonPage id={id} />,
};

export default routes;
