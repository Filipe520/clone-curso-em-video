import styles from "./styles.module.css";

interface InputProp {
  name: string;
  title: string;
  type: string;
  changeFunction: (value: string) => void;
}

export default function Input({
  name,
  title,
  type,
  changeFunction,
}: InputProp) {
  return (
    <div>
      <label className={styles.label_input} htmlFor={name}>
        {title}
      </label>
      <input
        className={styles.input_form}
        type={type}
        id={name}
        name={name}
        onChange={(event) => changeFunction(event.target.value)}
        placeholder={title.toLocaleUpperCase()}
      />
    </div>
  );
}
