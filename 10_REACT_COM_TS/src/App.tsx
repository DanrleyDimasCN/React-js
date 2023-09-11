import './App.css'
import Destruturing, {Category} from './components/Destruturing';
import {createContext} from "react";

// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';

// 6 - useState
import State from './components/state';

// 9 - type
type textOrNull = string | null

// 10 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - variáveis
  const name: string = "Danrley";
  const age: number = 26;
  const isWorking: boolean = false;


  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 9 - type
  const myText:textOrNull = "Tem algum texto aqui"
  let mySecondText:textOrNull = null

  mySecondText = "Opa"

  // type fixed = "Isso" | "Ou" | "Aquilo";

  // const testandoFixed: fixed = "Isso"

  // 10 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (   
    <AppContext.Provider value={contextValue}>
      <div>
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {!isWorking && (
          <div>
            <p>não está trabalhando!</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SecondComponent name="Segundo"/>
        <Destruturing  title="Primeiro post"
        content='Algum conteúdo'
        commentQty={10}
        tags={["ts", "js"]} 
        category={Category.TS}/>

        <Destruturing  title="Segundo post"
        content='Mais outro conteúdo'
        commentQty={5}
        tags={["python"]} 
        category={Category.P}/>

        <State/>
        {myText &&
        <p>Tem texto na variável</p>
        }
        {mySecondText &&
        <p>Tem texto na variável</p>

        }
      </div>
      </AppContext.Provider>
  )
}

export default App