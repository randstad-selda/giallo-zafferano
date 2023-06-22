import { BrowserRouter, Routes, Route } from "react-router-dom";
// Middlewares
import PrivateRoutes from "./middlewares/PrivateRoutes";
// Layouts
import BaseLayout from "./layouts/BaseLayout";
// Pagine Pubbliche
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
// Pagine Private
import GenerateRecipePage from "./pages/GenerateRecipePage";
import AddIngredientsPage from "./pages/AddIngretientsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotte pubbliche */}
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        {/* Rotte private */}
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/generate-recipe" element={<GenerateRecipePage />} />
          <Route path="/create-ingredients" element={<AddIngredientsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
