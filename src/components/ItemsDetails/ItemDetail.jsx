import React, {useContext, useState } from 'react'
import ItemCount from '../items/ItemCount'
import "./detail.css"
import { Link } from "react-router-dom"
import { CartContext } from '../context/CartContext'

export const ItemDetail = ({id, stock,foto, nombre ,descripcion ,precio}) => {

  const [cantidad, setCantidad] = useState(0)

  const { agregarAlCarrito, isInCart } = useContext(CartContext)

  // const handleAgregar = () => {
  //   if (cantidad === 0) return
  const ondAdd =()=>{
    if (!isInCart(id)) {
        const addItem = {
           id, nombre, precio, stock, cantidad,foto
        }

        agregarAlCarrito(addItem)
    }
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
                      

                      {
                        isInCart(id) 
                        ?  <Link to="/cart" className="btn btn-success my-3">
                                Terminar mi compra
                            </Link>
                            
                        :
                            <>
                                <ItemCount 
                                    max={stock} 
                                    counter={cantidad} 
                                    setCounter={setCantidad}
                                    onClick={ondAdd}
                                />
                      
                                <button
                                    className="btn btn-success my-2"            
                                    onClick={ondAdd}
                                    disabled={cantidad === 0}
                                >
                                    Agregar al carrito
                                </button>
                            </>
                      }
                      <Link to="/"><button className="btn btn-warning mx-2">Seguir comprando</button></Link>
                    </div>
                </div>
            </div>
      </div>
    )

}

export default ItemDetail