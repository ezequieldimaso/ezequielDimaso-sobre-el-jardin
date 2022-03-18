import React, { useState } from 'react'
import ItemCount from "../items/ItemCount"
import "../cards/Cards.css"

const onAdd = ()=>{
  console.log("agrego productos al carrito")
}
const Cards = ({produs}) => {
  const [show, setShow]=useState(false)

  const verMas =()=>{
    console.log(show)
    setShow(!show)
  }
  return (
    <div className="card">
            <img className='img' src={produs.foto}alt='planta'/>
            <div className='cardContainer'>
                <div className="card-body ">
                  <h5 className="card-text">{produs.nombre}</h5>
                  <p className="card-text">{produs.descripcion}</p>
                  <p className="card-text">${produs.precio}</p>
                  <div className='verMas '>
                  <button className='btn btn-secondary' onClick={verMas}>{show ?"Ver menos" : "Ver mas"}</button>
                  </div>
                  <ItemCount stock={5} initial={1} onAdd={onAdd} />
                </div>
            </div>
    </div>
  )
}

export default Cards