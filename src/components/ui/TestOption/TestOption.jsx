import styles from "./TestOption.module.scss";

function TestOption({ text, ...props }) {
  return (
    <div className={styles.option}>
      <input type="radio" {...props} />
      <span>{text}</span>
    </div>
  );
}

export default TestOption;
