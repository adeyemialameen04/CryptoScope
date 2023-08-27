import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Crypto <span>Scope</span></h1>
        <div>
          <Link to="/">Coins</Link>
          <Link to="/news">Crypto News</Link>
        </div>
      </div>
    </header>
  );
};
