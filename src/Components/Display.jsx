import styles from "./Display.module.css";
const Display = ({ displayvalue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayvalue}
      readOnly
    ></input>
  );
};
export default Display;
