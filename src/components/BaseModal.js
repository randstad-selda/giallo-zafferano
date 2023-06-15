import close from "../images/close.svg";

export default function BaseModal({ className, onClick, title, children }) {
  return (
    <div className={`modal ${className}`}>
      <div className="modal-wrapper container">
        <button className="modal-close" onClick={onClick}>
          <img src={close} />
        </button>
        <h2 className="modal-title">{title}</h2>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
