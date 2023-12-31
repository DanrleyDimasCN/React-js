
const Event = () => {

    const handleClick = (e) => {
        console.log(e);
        console.log("Executou");
    };


    // 8 - Função de renderização

    const renderSomething = (x) => {
      if(x) { 
        return <h1>Renderinzando alguma coisa!</h1>
    } else {
      return <h1>Renderizando outra coisa!</h1>
    }
};

// return 10 > 2 && <p>Carregando...</p>

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
        </div>
        {/* 7 - evento com função */}
        <div>
            <button onClick={handleClick}>Clique aqui - com função</button>
        </div>
        {/* 8 - Função com render */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Event