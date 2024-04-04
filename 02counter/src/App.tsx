import { useState } from "react";

function App() {
  // eslint-disable-next-line prefer-const
  let [counterValue, setCounterValue] = useState(0)

  const addValue = () => {
    if(counterValue < 20) {
    counterValue += 1;
    setCounterValue(counterValue);
    }
  }
  const removeValue = () => {
    if(counterValue > 0){
      setCounterValue(counterValue - 1);
    }else{
      setCounterValue(0)
    }
  }

  return (
    <div >
    <h1>Counter</h1>
    <h2>Counter Value: {counterValue}</h2>
    <button onClick={addValue}>Add Value {counterValue}</button>
    <br />
    <button onClick={removeValue}>remove Value {counterValue}</button>
    </div>
  )
}

export default App
