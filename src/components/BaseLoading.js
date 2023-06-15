import loading from "../images/loading.gif";

export default function BaseLoading({ className }) {
  return (
    <div className={`loading ${className}`}>
      <div className="loading-content container">
        <h2>Caricamento</h2>
        <img src={loading} />
      </div>
    </div>
  );
}
