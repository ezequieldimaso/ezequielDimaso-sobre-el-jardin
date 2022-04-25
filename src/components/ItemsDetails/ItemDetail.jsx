import React, {useContext, useState } from 'react'
import ItemCount from '../items/ItemCount'
import "./detail.css"
import { Link } from "react-router-dom"
import { CartContext } from '../context/CartContext'

export const ItemDetail = ({id, stock,foto, nombre ,descripcion ,precio}) => {

  const [cantidad, setCantidad] = useState(0)
  const[compra ,setCompra]= useState(false)
  const { agregarAlCarrito} = useContext(CartContext)

  const handleAgregar = (cantidad) => {
    
        const addItem = {
          id,
          nombre,
          precio,
          stock, 
          cantidad:cantidad,
          foto }
          agregarAlCarrito(addItem)
          setCompra(true)
  }

  return (

        <div className='detalleContainer'>
          <img  className="imgDetail img-thumbnail" src={foto}alt='planta'/>
            <div >
                <div>
                    <div className='title'>
                      <h2 >{nombre}</h2>
                    </div>
                    <div className="card-body">
                      <h3 className="price">${precio}</h3>
                      <p  className='textDescripcion'>{descripcion}</p>
                 
                       <ItemCount 
                                    max={stock} 
                                    counter={cantidad} 
                                    setCounter={setCantidad}
                                    onAdd={handleAgregar}
                                />   
                      {compra &&
                          <>
                            <Link to="/cart" className="btn btn-success my-3">
                              Terminar mi compra
                            </Link>
                            <Link to="/"><button className="btn btn-warning mx-2 ">Seguir comprando</button></Link>
                            </>
                      }                    
                    </div>
                </div>
            </div>
      </div>
    )

}

export default ItemDetail