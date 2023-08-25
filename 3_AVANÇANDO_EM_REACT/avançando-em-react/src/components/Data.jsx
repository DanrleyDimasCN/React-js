import { useState } from "react"

const Data = () => {
    let someData = 10;
    
    const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variável</button>
        </div>
        <div>
            <p>valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 5)}>Mudar state</button>
        </div>
    </div>
  )
}

export default Data