import { A } from "hookrouter";
import logo from "../../images/logo.png";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <A href="/home">
        <section id="title">
          <img className="logo" src={logo} alt="pokemon logo" />
        </section>
      </A>
    </div>
  );
}
