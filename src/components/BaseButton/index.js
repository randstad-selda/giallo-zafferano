import style from "./style.module.css";

export default function BaseButton({ onClick, content }) {
  return (
    <button className={style.btn} onClick={onClick}>
      {content}
    </button>
  );
}
