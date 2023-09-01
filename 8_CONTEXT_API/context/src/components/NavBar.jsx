import { NavLink } from "react-router-dom"

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
        <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>Contatos</NavLink>
    </div>
  )
}

export default NavBar