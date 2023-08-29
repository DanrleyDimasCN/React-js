import './App.css'

import { Outlet } from 'react-router-dom'

// 5 - link entre páginas
import NavBar from './components/NavBar'

// 9 - search params
import SearchForm from './components/SearchForm'

function App() {
  return (
      <div className='App'>
        <NavBar/>
        <SearchForm/>
        <Outlet/>
        <p>Footer</p>
      </div>
  )
}

export default App
