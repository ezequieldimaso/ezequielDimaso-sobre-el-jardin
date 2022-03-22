import React, { useState } from 'react'


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
        <div>
            <button className='btn btn-success btn-sm'onClick={restar}>-</button>
            <span className='btn btn-light'>{count}</span>
            <button className='btn btn-success btn-sm' onClick={sumar}>+</button>
            <button className='btn btn-info fw-bold texto add' onClick={onAdd}>Agregar al carrito</button>   
        </div>
    </div>
  )
}

export default ItemCount