import React from 'react'
import CartWidget from '../cart/CartWidget'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo1.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  navBarColor ">
  <div className="container-fluid">
    <div className='Navbar container-fluid'>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
        <Link className="navbar-brand" to="/"><img className='logo' src={logo} alt="logo" /> </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item"  to="/productos/interior">Plantas Interior</Link></li>
              <li><Link className="dropdown-item"  to="/productos/exterior">Plantas Exterior</Link></li>
              <li><Link className="dropdown-item"  to="/productos/macetas">Macetas</Link></li>
              
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </div>  
    <CartWidget/>
  </div>
</nav>
  )
}

export default Navbar