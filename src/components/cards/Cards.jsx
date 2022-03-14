import React from 'react'
import ItemCount from "../items/ItemCount"
import "../cards/Cards.css"

const onAdd = ()=>{
  console.log("agrego productos al carrito")
}
const Cards = ({produs}) => {
  return (
    <div className="card">
            <img className='img' src={produs.foto}alt='planta'/>
            <div className='cardContainer'>
                <div className="card-body ">
                  <h5 className="card-text">{produs.nombre}</h5>
                  <p className="card-text">{produs.descripcion}</p>
                  <p className="card-text">${produs.precio}</p>
                  <ItemCount stock={5} initial={1} onAdd={onAdd} />
                </div>
            </div>
    </div>
  )
}

export default Cards