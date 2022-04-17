import React from 'react'
import { Link } from 'react-router-dom'
import error from "../../assets/img/error.svg"
import "./error404.css"


const Error404 = () => {
  return (
    <>
    <div className='bodyError'>
      <div className="containerError">
        <img className='error' src={error} alt="error" />
          <h3 className='textError'>La página que ha solicitado no se encuentra disponible</h3>
          <div className="botonError">
            <Link to="/"><button className='btn btn-danger verMas'>Volver al inicio</button></Link>
          </div>
      </div>
    </div>
  </>  )
}

export default Error404