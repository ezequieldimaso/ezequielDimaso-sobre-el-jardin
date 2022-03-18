import React from 'react'
import ItemCount from '../items/ItemCount'


export const ItemDetail = ({itemd}) => {
  return (

        <div className="card">
            <img className='img' src={itemd.foto}alt='planta'/>
            <div className='cardContainer'>
                <div className="card-body ">
                  <h5 className="card-text">{itemd.nombre}</h5>
                  <p className="card-text">{itemd.descripcion}</p>
                  <p className="card-text">${itemd.precio}</p>
              </div>
            </div>
          </div>
   
  )
}

export default ItemDetail