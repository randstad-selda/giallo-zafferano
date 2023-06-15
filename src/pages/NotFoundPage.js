import { Link } from "react-router-dom";
import TheHeader from "../components/TheHeader";

export default function NotFoundPage() {
  return (
    <>
      <TheHeader title="Pagina 404" />
      <main>
        <div className="container">
          La pagina non è stata trovata.<br></br>
          <Link to="/">Torna All'home page</Link>
        </div>
      </main>
    </>
  );
}
