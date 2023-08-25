// eslint-disable-next-line react/prop-types
const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <ul>
            <h2>Detalhes do carro:</h2>
            <li>Marca: {brand}</li>
            <li>Kilometragem: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails