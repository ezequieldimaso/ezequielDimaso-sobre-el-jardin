import React, { useState } from 'react'
import planta from './imagenes/planta.jpg'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const sumar = ()=>{
        if(count < stock){
            setCount(count +1)
        }
    }
    const restar = ()=>{
        if (count > 0) {
            setCount(count -1)
        }
    }

  return (
    <div className='counter'>
        <div className="card">
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
            <button onClick={onAdd}>Agregar al carrito</button>     
        </div>
    </div>
  )
}

export default ItemCount