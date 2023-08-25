import './App.css'

// 2 - Importando componente

import FirstComponent from './components/FirstComponent'


// 4 - template expression

import TemplateExpression from './components/TemplateExpression'

// 5 - Hierarquia de componentes

import MyComponent from './components/MyComponent'

// 6 - eventos

import Event from './components/Event'

function App() {

  // 3 - comentarios

  return (
   <div className="app">
    {/* 3 - comentário JSX */}
    <h1>Fundamentos do React</h1>
    <FirstComponent/>
    <TemplateExpression/>
    <MyComponent/>
    <Event/>
   </div>
  )
}

export default App
