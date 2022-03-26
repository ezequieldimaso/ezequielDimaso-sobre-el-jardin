import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { useContext } from "react"
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const Cart = () => {
  const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

  if(cart.length ===0){
    return <div className='container my-4'>
              <h2>Tu carrito esta vacio</h2>
              <Link to="/" className="btn btn-primary"> Volver</Link>


          </div>
  }

  return (
      <div className="container my-4">
          <h2>Tu compra</h2>
          

          {
              cart.map((item) => (
                  <div key={item.id}>
                      <h4>{item.nombre}</h4>
                      <p>Cantidad: {item.cantidad}</p>
                      <p>Precio: ${item.cantidad * item.precio}</p>
                      <img className='img' src={item.foto}alt='planta'/>
                      <button className="btn btn-danger delete" onClick={() => eliminarItem(item.id)}>
                          < BsFillTrashFill/>
                      </button>
                  </div>
              ))
          }

          <hr/>
          <h2>Total: ${totalCart()}</h2>

          <div className="my-2">
              <button className="btn btn-danger" onClick={vaciarCart}>Vaciar carrito</button>
              <Link to="/"><button className="btn btn-success mx-2">Seguir comprando</button></Link>
              <Link to="/"><button className="btn btn-warning " onClick={vaciarCart}>Terminar compra</button></Link>
          </div>
      </div>
  )
}

export default Cart