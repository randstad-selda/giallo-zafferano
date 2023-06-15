import TheHeader from "../components/TheHeader";

import { useState, useEffect } from "react";

// Services
import AiService from "../services/AiService";
import IngredientsService from "../services/IngredientsService";
// Components
import BaseButton from "../components/BaseButton";
import BaseIngredient from "../components/BaseIngredient";
import BaseModal from "../components/BaseModal";
import BaseLoading from "../components/BaseLoading";

export default function GenerateRecipePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [ingredientsSelected, setIngredientsSelected] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    IngredientsService.readAll().then((data) => {
      setIngredients(data);
    });
  }, []);

  function handleClickIngredient(ingredient) {
    let newIngredients = [...ingredientsSelected];

    if (newIngredients.includes(ingredient)) {
      newIngredients = newIngredients.filter((el) => el != ingredient);
    } else {
      newIngredients.push(ingredient);
    }
    setIngredientsSelected(newIngredients);
  }

  function handleGenerateRecipe() {
    setIsLoading(true);
    const message = `Crea una ricetta con questi ingredienti: ${ingredientsSelected.join(
      ", "
    )}.
    Le tue risposte sono solo in formato JSON come questo esempio:
    {"title": "Titolo ricetta", "ingredients": "1 uovo e 1 pomodoro", "procedure": "mescola gli ingredienti e metti in forno"}
    `;
    AiService.sendMessage(message)
      .then((data) => {
        setRecipe(JSON.parse(data));
      })
      .catch((error) => {
        setIsError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <TheHeader title="Genera una ricetta" />
      <main>
        <div className="container">
          {/* Lista Ingredienti */}
          <div className="ingredients">
            {ingredients.map((ingredient) => {
              return (
                <BaseIngredient
                  key={ingredient.id}
                  ingredient={ingredient}
                  className={
                    ingredientsSelected.includes(ingredient.name)
                      ? "ingredient-selected"
                      : ""
                  }
                  onClick={() => handleClickIngredient(ingredient.name)}
                />
              );
            })}
          </div>
          <div className="actions">
            {ingredientsSelected.length > 0 && (
              <BaseButton
                content="Genera Ricetta"
                onClick={handleGenerateRecipe}
              />
            )}
          </div>
          {/* Modale Ricetta */}
          <BaseModal
            title="Ricetta"
            className={!recipe ? "hidden" : ""}
            onClick={() => setRecipe("")}
          >
            <>
              <h3>{recipe.title}</h3>
              <p>
                <strong>Lista Ingredient:</strong> {recipe.ingredients}
              </p>
              <h4>Procedimento:</h4>
              <p>{recipe.procedure}</p>
            </>
          </BaseModal>
          {/* Modale Errore */}
          <BaseModal
            title="Errore"
            className={!isError ? "hidden" : ""}
            onClick={() => setIsError(false)}
          >
            <p>{isError}</p>
          </BaseModal>

          {/* Loading */}
          <BaseLoading className={!isLoading ? "hidden" : ""} />
        </div>
      </main>
    </>
  );
}
