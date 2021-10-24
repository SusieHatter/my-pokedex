import { useRoutes } from "hookrouter";

import "./App.css";
import routes from "./router";

function App() {
  const routeResult = useRoutes(routes);
  return <div className="app">{routeResult || "404"}</div>;
}

export default App;
