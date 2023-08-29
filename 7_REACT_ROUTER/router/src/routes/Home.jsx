import React from 'react'

// 6 - carregamento de dados
import {useFetch} from '../hooks/useFetch';

const url = "http://localhost:3000/products";

// 7 - rota dinamica
import {Link} from 'react-router-dom';
import Product from './Product';

const Home = () => {

  const {data: items} = useFetch(url)

  return (
    <div>
        <h1>Home</h1>
        <ul className='products'>
          {/* 6 - carregamento de dados */}
          {items && items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              {/* 7 - rota dinamica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
              </li>
          ))}
        </ul>
    </div>
  )
}

export default Home 