import React from 'react'
import CartWidget from '../cart/CartWidget'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-success ">
  <div className="container-fluid">
    <div className='Navbar container-fluid'>
      <Link className="navbar-brand" to="/">SOBRE EL JARDIN </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
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
    <Link className='icon' to="/cart"><CartWidget/></Link>
  </div>
</nav>
  )
}

export default Navbar