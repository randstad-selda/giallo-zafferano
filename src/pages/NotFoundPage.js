import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function NotFoundPage() {
  const [setPageTitle] = useOutletContext();

  useEffect(() => {
    setPageTitle("Pagina non trovata");
  }, []);

  return (
    <>
      La pagina non è stata trovata.<br></br>
      <Link to="/">Torna All'home page</Link>
    </>
  );
}
