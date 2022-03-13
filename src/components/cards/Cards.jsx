import React from 'react'


const Cards = ({produs}) => {
  return (
    <div className="card">
            <img src={produs.foto}alt='planta'/>
            <div className='cardContainer'>
                <div className="card-body ">
                  <h5 className="card-text">{produs.nombre}</h5>
                  <p className="card-text">{produs.descripcion}</p>
                  <p className="card-text">{produs.precio}</p>
                </div>
            </div>
    </div>
  )
}

export default Cards