import { useState } from "react";
import Button from "./components/Button"
import Text from "./components/Text"

// Bu ornekte map , onChange, onCLick, props, component ve setState konusuna baktik.

const App = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [data, setData] = useState([])

  const decrement = () => {
    if (count <= 0) return
    setCount(prev => prev - 1)
  }
  const changed = (e) => {
    setName(e.target.value)
  }
  const clicked = () => {
    setData(prev => [...prev, name])
  }

  console.log(data);
  
  return (
    <>
      {/* <input type="text" onChange={(e) => setName(e.target.value)} /> */}
      <input type="text" onChange={changed} />
      <button onClick={clicked}>Tikla</button>
      {
        data.map((dt , i) => <div key={i}>{dt}</div>)
      }

      {/* <Text name={data} /> */}

      <Button name={"Arttır"} onClick={() => setCount(count + 1)} />
      {/* <button onClick={() => setCount(count + 1)}>Arttır</button> */}
      <div>{count}</div>
      <button onClick={decrement}>Azalt</button>
    </>
  );
};

export default App;
