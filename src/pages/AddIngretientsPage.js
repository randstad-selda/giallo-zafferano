import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import BaseButton from "../components/BaseButton";
import BaseLoading from "../components/BaseLoading";
import BaseModal from "../components/BaseModal";

import IngredientsService from "../services/IngredientsService";

const initialIngredient = {
  name: "",
  image: "",
};

export default function AddIngredientsPage() {
  const [ingredient, setIngredient] = useState(initialIngredient);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [setPageTitle] = useOutletContext();

  useEffect(() => {
    setPageTitle("Ingredienti");
  }, []);

  function addIngredient(e) {
    e.preventDefault();
    setIsLoading(true);
    IngredientsService.create(ingredient)
      .then(() => {
        setSuccess("Ingrediente creato con successo");
        setIngredient(initialIngredient);
      })
      .catch((error) => {
        setIsError(error.message);
      })
      .finally(() => {
        setModalVisible(true);
        setIsLoading(false);
      });
  }

  function handleInput(e) {
    setIngredient({
      ...ingredient,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <>
      <form onSubmit={addIngredient}>
        <div>
          <label forhtml="name">Nome</label>
          <input
            id="name"
            placeholder="Inserisci il nome"
            value={ingredient.name}
            onChange={handleInput}
          />
        </div>
        <div>
          <label forhtml="image">Immagine</label>
          <input
            id="image"
            placeholder="Inserisci url immagine"
            value={ingredient.image}
            onChange={handleInput}
          />
        </div>
        <BaseButton content="Crea" />
      </form>
      {/* Modale */}
      <BaseModal
        title={success ? "Creazione avvenuta con successo" : "Errore"}
        className={!modalVisible ? "hidden" : ""}
        onClick={() => setModalVisible(false)}
      >
        <p>{success || isError}</p>
      </BaseModal>
      {/* Loading */}
      <BaseLoading className={!isLoading ? "hidden" : ""} />
    </>
  );
}
