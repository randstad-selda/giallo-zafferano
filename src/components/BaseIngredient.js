export default function BaseIngredient({ className, onClick, ingredient }) {
  return (
    <div className={`ingredient ${className}`} onClick={onClick}>
      {ingredient.name}
      <img src={ingredient.image} alt={ingredient.name} />
    </div>
  );
}
