import styles from "./ButtonComponents.module.css";
const ButtonComponents = ({onButtonclick})=> {
  const buttonnames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
    "X"
  ];
  return (
    <div className={styles.container}>
      {buttonnames.map((buttonName) => (
        <button className={styles.buttonclass}
        onClick={()=>onButtonclick(buttonName)}

        >{buttonName}</button>
      ))}
    </div>
  );
};
export default ButtonComponents;
