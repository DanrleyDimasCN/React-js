// eslint-disable-next-line no-unused-vars
import React from 'react'

const ConditionalRender = () => {
    let x = 5

    const name = "João"

  return (
    <div>
        {/* 7 - condicional render */}
        <h3>Isso será imprimido?</h3>
         {x > 2 && <p> Sim!, X é maior que 2!</p>}   
         {/* 8 - else */}
         <h3>Render ternário</h3>
         {name === "João" ? (
            <div>
                <p>Olá, {"João"}!</p>
            </div>
         ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
         )}
    </div>
  )
} 

export default ConditionalRender