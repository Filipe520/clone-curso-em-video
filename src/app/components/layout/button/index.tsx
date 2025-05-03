import styles from "./styles.module.css";

interface ButtonProp {
  title: string;
  clickFunction: () => void;
}

export default function Button({ title, clickFunction }: ButtonProp) {
  return (
    <button
      className={styles.button_form}
      type="button"
      onClick={clickFunction} // Passando a função diretamente
    >
      {title}
    </button>
  );
}
