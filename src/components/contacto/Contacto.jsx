import React from 'react'
import { Link } from 'react-router-dom'
import "./contacto.css"

const Contacto = () => {

  const mensaje = (e) => {
    e.preventDefault()
    alert("mensaje enviado")
  }
  
  return (
    <div className="container my-5">
            <h2 className='titleContacto'>Dejanos tu consulta o sugerencia</h2>
            <hr/>

            <form className='form'>
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="Tu nombre"
                    name='nombre'
                />
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="Tu email"
                    name='email'
                />
                <input
                    className="form-control my-2 pt-5"
                    type='text'
                    placeholder="mensaje"
                    name='Escribinos aca tu opinon o consulta'
                />
              <button type="submit" className="btn btn-primary btnContacto"onClick={mensaje}>Enviar</button>
               <Link to="/" className="btn btn-danger">Volver</Link>
            </form>
        </div>
  )
}

export default Contacto