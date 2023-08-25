import './App.css'

// 2 - imagens em assets
import night from './assets/night.jpg'


// 3 - useState
import Data from './components/Data'

// 4 - renderização de lista
import ListRender from './components/ListRender'

// 7 - conditional render
import ConditionalRender from './components/ConditionalRender'

// 8 - props
import ShowUserName from './components/ShowUserName'

// 9 - Desestruturando props
import CarDetails from './components/CarDetails'


// 11 - renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  { id: 2, brand: "KIA", color: "Branco", km: 200000},
  { id: 3, brand: "Renault", color: "Azul", km: 32000},
];

// 12 - fragment
import Fragment from './components/Fragment'

// 13 - Children prop
import Container from './components/Container'


// 14 - função em prop
import ExecuteFunction from './components/ExecuteFunction'

// 15 - state lift
import Message from './components/Message'
import { useState } from 'react'
import ChangeMessage from './components/ChangeMessage'

function App() {

  // 14 - Função em prop

  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - state lift

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };


  return (
      <div className='app' style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/* 1 imagem em public */}
        <img src="/img.jpg" alt="Alguma imagem" />
        {/* 2 - imagem em assets */}
              <img src={night}  alt="Outra imagem" />
              {/* 3 - useState */}
            <Data/>
            {/* 4 - renderização de lista */}
            <ListRender/>
            {/* 7 - render conditional */}
            <ConditionalRender/>
            {/* 8 - props */}
            <ShowUserName name="Danrley"/>
            {/* 9 - Desestruturando props */}
            <CarDetails brand="VW" km={9999} color={"Vermelho"}/>
          
            {/* 10 - reaproveitamento de componentes */}
            <CarDetails brand="Fiat" km={123444} color={"Branco"}/>
            <CarDetails km={9987} color={"Azul"} brand="Audi"/>
            {/* 11 - renderização de listas com componente */}
            {cars.map((car) => (
              <CarDetails
              key={car.id}
              brand={car.brand}
              color={car.color}
              km={car.km}/>
            ))}
            {/* 12 - fragment */}
            <Fragment/>
            {/* 13 - children prop */}
            <Container>
              <div>
                <h2>Teste</h2>
                <p>Meu container</p>
              </div>
            </Container>
            {/* 14 - função em prop */}
            <ExecuteFunction myFunction={showMessage}/>
            {/* 15 - state lift */}
            <Message msg={message}/>
            <ChangeMessage handleMessage={handleMessage}/>
      </div>
   
  )
}

export default App
