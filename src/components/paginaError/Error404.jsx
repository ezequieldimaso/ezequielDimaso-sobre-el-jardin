import React from 'react'
import { Link } from 'react-router-dom'



const Error404 = () => {
  return (
    <>
    <div className="text-center">
        <h1>ERROR 404....!!!!!</h1>
        <h3>La página que ha solicitado no se encuentra disponible</h3>
        <div className="boton">
          <Link to="/"><button className='btn btn-danger verMas'>Volver al inicio</button></Link>
        </div>
    </div>
  </>  )
}

export default Error404