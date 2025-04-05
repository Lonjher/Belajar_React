import { useState } from 'react'
  
function App() {
  const [number, setNumber] = useState(0);
  
  const tambah = () => {
    setNumber(number + 1);
  }
  
  const kurang = () => {
    setNumber(number - 1);
  }
  
  const reset = () =>{
    // setNumber(number - number);
    setNumber((state) => 0)
  }
  
  function Button({aksi, value}){
    return (<button onClick={aksi} >{value}</button>)
  }
  
  return (
    <>
      <h1>Hello World</h1>
      <div>
        <Button aksi={kurang} value="-"/>
        <span >{number}</span>
        <Button aksi={tambah} value="+"/>
      </div>
      <Button aksi={reset} value="Reset Number"/>
    </>
  )
}

export default App
