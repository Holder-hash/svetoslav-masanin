import styles from "./TestOption.module.scss";

function TestOption({ text, ...props }) {
  return (
    <div>
      <input type="radio" {...props} />
      <span>{text}</span>
    </div>
  );
}

export default TestOption;
