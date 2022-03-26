import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import "./cart.css"


function CartWidget  ()  {

  const { cantidadCart,cart } = useContext(CartContext)

  return (
      
      <Link to="/cart" className={cart.length === 0 ? "cartWidget cartHidden" :"cartWidget" }>
       <div className="cartWidgetContainer"> 
          <FaCartArrowDown/>
          <span>{cantidadCart()}</span>
      </div>
      </Link>
  )
}

export default CartWidget