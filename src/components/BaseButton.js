export default function BaseButton({ onClick, content }) {
  return (
    <button className="btn" onClick={onClick}>
      {content}
    </button>
  );
}
