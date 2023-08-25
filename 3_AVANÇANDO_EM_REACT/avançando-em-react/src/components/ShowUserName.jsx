const ShowUserName = (props) => {
  return (
    <div>
         {/* eslint-disable-next-line react/prop-types */}
        <h2>O nome do usuário é: {props.name}</h2>
    </div>
  )
}

export default ShowUserName