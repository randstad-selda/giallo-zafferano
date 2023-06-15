import { Link } from "react-router-dom";

export default function TheHeader({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/create-ingredients">Aggiungi Ingredienti</Link>
          </li>
          <li>
            <Link to="/generate-recipe">Genera Ricetta</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
