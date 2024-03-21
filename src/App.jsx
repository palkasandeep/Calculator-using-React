import { useState } from "react";
import styles from "./App.module.css";
import ButtonComponents from "./Components/ButtonComponents";
import Display from "./Components/Display";

function App() {


  let [calvalue,setcalvalue]=useState("");
  const onButtonclick=(buttonText)=> 
  {
    if(buttonText==="C"){
        setcalvalue("");
    }
    else if(buttonText==="="){
          const res=eval(calvalue);
          setcalvalue(res);
    }
  else if(buttonText=="X"){
    calvalue("");
    setcalvalue(calvalue);
  }

    else{
const newdisplayvalue=calvalue+buttonText;
setcalvalue(newdisplayvalue);
    }
  };

  
  return (
    <div className={styles.calculator}>
      <Display displayvalue={calvalue}></Display>
      <ButtonComponents onButtonclick={onButtonclick}></ButtonComponents>
    </div>
  );
}

export default App;
