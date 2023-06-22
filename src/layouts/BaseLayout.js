import { useState } from "react";
import { Outlet } from "react-router-dom";

import TheHeader from "../components/TheHeader";
import TheMain from "../components/TheMain";

export default function BaseLayout() {
  const [pageTitle, setPageTitle] = useState("Titolo Pagina");
  return (
    <>
      <TheHeader title={pageTitle} />
      <TheMain>
        <Outlet context={[setPageTitle]} />
      </TheMain>
    </>
  );
}
