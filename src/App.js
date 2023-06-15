import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TheMain from "./components/TheMain";
import HomePage from "./pages/HomePage";
import GenerateRecipePage from "./pages/GenerateRecipePage";
import AddIngredientsPage from "./pages/AddIngretientsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate-recipe" element={<GenerateRecipePage />} />
        <Route path="/create-ingredients" element={<AddIngredientsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
