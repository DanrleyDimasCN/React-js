// 4 - template expression

const TemplateExpression = () => {

    const name = "Danrley Dimas";

    const data = {
        age: 26,
        ocupaction: "Estudante de Programação"
    }

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem-vindo {name}</h3>
        <p>Meu nome é {name}, tenho {data.age} anos e no momento minha ocupação é {data.ocupaction}.</p>
    </div>
  )
}

export default TemplateExpression